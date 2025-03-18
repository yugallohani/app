import { Trophy, Medal, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface LeaderboardUser {
  id: string;
  rank: number;
  name: string;
  avatar: string;
  tokens: number;
  certificates: number;
  institution: string;
  change: 'up' | 'down' | 'same';
}

const mockLeaderboardData: LeaderboardUser[] = [
  {
    id: '1',
    rank: 1,
    name: 'Sarah Chen',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    tokens: 156,
    certificates: 12,
    institution: 'MIT',
    change: 'same'
  },
  {
    id: '2',
    rank: 2,
    name: 'Alex Kumar',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    tokens: 142,
    certificates: 10,
    institution: 'Stanford University',
    change: 'up'
  },
  {
    id: '3',
    rank: 3,
    name: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    tokens: 128,
    certificates: 9,
    institution: 'Harvard University',
    change: 'down'
  }
];

export function Leaderboard() {
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-6 w-6 text-yellow-400" />;
      case 2:
        return <Medal className="h-6 w-6 text-gray-400" />;
      case 3:
        return <Medal className="h-6 w-6 text-amber-600" />;
      default:
        return <Award className="h-6 w-6 text-blue-600" />;
    }
  };

  const getChangeColor = (change: 'up' | 'down' | 'same') => {
    switch (change) {
      case 'up':
        return 'text-green-600';
      case 'down':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Top Performers</h1>
          <p className="text-gray-600">
            Leading learners who have earned the most tokens through verified achievements
          </p>
        </div>

        {/* Top 3 Podium */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mockLeaderboardData.slice(0, 3).map((user) => (
            <div
              key={user.id}
              className={`bg-white rounded-lg shadow-sm p-6 ${
                user.rank === 1 ? 'md:transform md:-translate-y-4' : ''
              }`}
            >
              <div className="flex flex-col items-center">
                <div className="relative">
                  <img
                    src={user.avatar}
                    alt={user.name}
                    className="h-20 w-20 rounded-full border-4 border-white shadow-lg"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-white rounded-full p-1 shadow">
                    {getRankIcon(user.rank)}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{user.name}</h3>
                <p className="text-sm text-gray-500">{user.institution}</p>
                <div className="mt-3 flex items-center space-x-2">
                  <Award className="h-5 w-5 text-blue-600" />
                  <span className="text-2xl font-bold text-blue-600">{user.tokens}</span>
                  <span className="text-gray-500">tokens</span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{user.certificates} certificates</p>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard Table */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Full Leaderboard</h3>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {mockLeaderboardData.map((user) => (
              <li key={user.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <Link to={`/profile/${user.id}`} className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold">
                      {user.rank}
                    </span>
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="h-12 w-12 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{user.name}</p>
                      <p className="text-sm text-gray-500">{user.institution}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-8">
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-900">{user.tokens} tokens</p>
                      <p className="text-sm text-gray-500">{user.certificates} certificates</p>
                    </div>
                    <span className={`flex items-center ${getChangeColor(user.change)}`}>
                      <ArrowRight className="h-5 w-5" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}