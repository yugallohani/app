import { Award, BarChart3, Calendar, AlignCenterVertical as Certificate, Clock, Target, TrendingUp, Trophy } from 'lucide-react';

interface Achievement {
  id: string;
  title: string;
  issuer: string;
  date: string;
  tokens: number;
  category: string;
}

const mockAchievements: Achievement[] = [
  {
    id: '1',
    title: 'Advanced Machine Learning',
    issuer: 'NPTEL',
    date: '2024-02-15',
    tokens: 2,
    category: 'Course'
  },
  {
    id: '2',
    title: 'State Robotics Championship',
    issuer: 'State Technical University',
    date: '2024-02-01',
    tokens: 3,
    category: 'Competition'
  },
  {
    id: '3',
    title: 'Web Development Bootcamp',
    issuer: 'Udacity',
    date: '2024-01-15',
    tokens: 2,
    category: 'Course'
  }
];

const mockStats = {
  totalTokens: 156,
  rank: 12,
  certificatesVerified: 15,
  completionRate: 92,
  monthlyProgress: [65, 78, 90, 120, 156],
  categoryDistribution: [
    { name: 'Courses', value: 8 },
    { name: 'Competitions', value: 4 },
    { name: 'Projects', value: 2 },
    { name: 'Workshops', value: 1 }
  ]
};

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Learning Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your achievements, tokens, and learning progress
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
          {/* Total Tokens */}
          <div className="bg-white overflow-hidden rounded-lg shadow-sm">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Award className="h-6 w-6 text-blue-600" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Total Tokens</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{mockStats.totalTokens}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Current Rank */}
          <div className="bg-white overflow-hidden rounded-lg shadow-sm">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Trophy className="h-6 w-6 text-yellow-400" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Current Rank</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">#{mockStats.rank}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Certificates Verified */}
          <div className="bg-white overflow-hidden rounded-lg shadow-sm">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Certificate className="h-6 w-6 text-green-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Verified Certificates</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{mockStats.certificatesVerified}</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>

          {/* Completion Rate */}
          <div className="bg-white overflow-hidden rounded-lg shadow-sm">
            <div className="p-5">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Target className="h-6 w-6 text-purple-500" />
                </div>
                <div className="ml-5 w-0 flex-1">
                  <dl>
                    <dt className="text-sm font-medium text-gray-500 truncate">Completion Rate</dt>
                    <dd className="flex items-baseline">
                      <div className="text-2xl font-semibold text-gray-900">{mockStats.completionRate}%</div>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2 mb-8">
          {/* Progress Chart */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Token Progress</h2>
              <TrendingUp className="h-5 w-5 text-gray-400" />
            </div>
            <div className="h-64 flex items-end justify-between space-x-2">
              {mockStats.monthlyProgress.map((value, index) => (
                <div key={index} className="flex-1">
                  <div
                    className="bg-blue-100 hover:bg-blue-200 rounded-t transition-all duration-300"
                    style={{ height: `${(value / Math.max(...mockStats.monthlyProgress)) * 100}%` }}
                  />
                  <div className="text-xs text-center mt-2 text-gray-500">
                    Month {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Category Distribution */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-medium text-gray-900">Achievement Categories</h2>
              <BarChart3 className="h-5 w-5 text-gray-400" />
            </div>
            <div className="space-y-4">
              {mockStats.categoryDistribution.map((category) => (
                <div key={category.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600">{category.name}</span>
                    <span className="font-medium">{category.value}</span>
                  </div>
                  <div className="mt-1 h-2 bg-gray-100 rounded-full">
                    <div
                      className="h-2 bg-blue-500 rounded-full"
                      style={{
                        width: `${(category.value / mockStats.certificatesVerified) * 100}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Achievements */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="px-4 py-5 sm:px-6 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-900">Recent Achievements</h3>
          </div>
          <ul role="list" className="divide-y divide-gray-200">
            {mockAchievements.map((achievement) => (
              <li key={achievement.id} className="px-4 py-4 sm:px-6 hover:bg-gray-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Award className="h-8 w-8 text-blue-600" />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">{achievement.title}</p>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-gray-500">{achievement.issuer}</span>
                        <span className="text-gray-300">•</span>
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          {achievement.date}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {achievement.category}
                    </span>
                    <span className="inline-flex items-center text-sm font-medium text-blue-600">
                      +{achievement.tokens} tokens
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}