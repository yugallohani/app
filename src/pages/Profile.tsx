import { useState } from 'react';
import { Award, Book, Calendar, Edit2, ExternalLink, Mail, MapPin, School, User } from 'lucide-react';

interface UserProfile {
  name: string;
  email: string;
  avatar: string;
  location: string;
  institution: string;
  bio: string;
  joinDate: string;
  totalTokens: number;
  achievements: {
    certificates: number;
    competitions: number;
    workshops: number;
  };
  education: {
    degree: string;
    field: string;
    year: string;
  };
  recentCertificates: {
    id: string;
    title: string;
    issuer: string;
    date: string;
    tokens: number;
    verified: boolean;
  }[];
}

const mockProfile: UserProfile = {
  name: 'Sarah Chen',
  email: 'sarah.chen@example.com',
  avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400',
  location: 'San Francisco, CA',
  institution: 'Stanford University',
  bio: 'Computer Science student passionate about machine learning and web development. Always eager to learn and take on new challenges.',
  joinDate: 'January 2024',
  totalTokens: 156,
  achievements: {
    certificates: 12,
    competitions: 5,
    workshops: 8
  },
  education: {
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    year: '2025'
  },
  recentCertificates: [
    {
      id: '1',
      title: 'Advanced Machine Learning',
      issuer: 'NPTEL',
      date: '2024-02-15',
      tokens: 2,
      verified: true
    },
    {
      id: '2',
      title: 'State Robotics Championship',
      issuer: 'State Technical University',
      date: '2024-02-01',
      tokens: 3,
      verified: true
    }
  ]
};

export function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<UserProfile>(mockProfile);

  const handleEdit = () => {
    setIsEditing(!isEditing);
    // In a real app, this would save changes to the backend
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-8">
          <div className="relative h-48 bg-gradient-to-r from-blue-500 to-blue-600">
            <button
              onClick={handleEdit}
              className="absolute top-4 right-4 flex items-center space-x-2 bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md backdrop-blur-sm transition-all duration-200"
            >
              <Edit2 className="h-4 w-4" />
              <span>{isEditing ? 'Save Changes' : 'Edit Profile'}</span>
            </button>
          </div>
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row sm:items-end sm:space-x-6">
              <div className="-mt-24">
                <div className="relative h-40 w-40 rounded-full border-4 border-white overflow-hidden shadow-lg">
                  <img
                    src={profile.avatar}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-6 sm:mt-0 flex-1">
                <div className="flex items-center justify-between">
                  <div>
                    <h1 className="text-2xl font-bold text-gray-900">{profile.name}</h1>
                    <div className="mt-1 flex items-center space-x-4 text-gray-500">
                      <div className="flex items-center">
                        <Mail className="h-4 w-4 mr-1" />
                        {profile.email}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {profile.location}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Award className="h-6 w-6 text-blue-600" />
                    <span className="text-2xl font-bold text-blue-600">{profile.totalTokens}</span>
                    <span className="text-gray-500">tokens</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-8">
            {/* About Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">About</h2>
              <p className="text-gray-600">{profile.bio}</p>
              <div className="mt-6 space-y-4">
                <div className="flex items-center text-gray-600">
                  <School className="h-5 w-5 mr-2" />
                  <span>{profile.institution}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Book className="h-5 w-5 mr-2" />
                  <span>{profile.education.degree} in {profile.education.field}</span>
                </div>
                <div className="flex items-center text-gray-600">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Joined {profile.joinDate}</span>
                </div>
              </div>
            </div>

            {/* Achievement Stats */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-medium text-gray-900 mb-4">Achievements</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Certificates</span>
                  <span className="font-medium">{profile.achievements.certificates}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Competitions</span>
                  <span className="font-medium">{profile.achievements.competitions}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Workshops</span>
                  <span className="font-medium">{profile.achievements.workshops}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2">
            {/* Recent Certificates */}
            <div className="bg-white rounded-lg shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-medium text-gray-900">Recent Certificates</h2>
              </div>
              <div className="divide-y divide-gray-200">
                {profile.recentCertificates.map((cert) => (
                  <div key={cert.id} className="p-6 hover:bg-gray-50 transition-colors duration-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <Award className="h-8 w-8 text-blue-600" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">{cert.title}</h3>
                          <div className="flex items-center mt-1">
                            <span className="text-sm text-gray-500">{cert.issuer}</span>
                            <span className="mx-2 text-gray-300">•</span>
                            <span className="text-sm text-gray-500">{cert.date}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        {cert.verified && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            Verified
                          </span>
                        )}
                        <span className="inline-flex items-center text-sm font-medium text-blue-600">
                          +{cert.tokens} tokens
                        </span>
                        <ExternalLink className="h-5 w-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}