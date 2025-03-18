import { useState } from 'react';
import { Award, Calendar, FileCheck, MessageSquare, Share2, ThumbsUp } from 'lucide-react';

interface Certificate {
  id: string;
  userId: string;
  userName: string;
  userAvatar: string;
  certificateTitle: string;
  certificateImage: string;
  issuer: string;
  issueDate: string;
  tokensAwarded: number;
  likes: number;
  comments: number;
  timestamp: string;
}

const mockCertificates: Certificate[] = [
  {
    id: '1',
    userId: 'user1',
    userName: 'Sarah Chen',
    userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    certificateTitle: 'Advanced Machine Learning',
    certificateImage: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800',
    issuer: 'NPTEL',
    issueDate: '2024-02-15',
    tokensAwarded: 2,
    likes: 42,
    comments: 5,
    timestamp: '2 hours ago'
  },
  {
    id: '2',
    userId: 'user2',
    userName: 'Alex Kumar',
    userAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    certificateTitle: 'State Level Robotics Championship',
    certificateImage: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    issuer: 'State Technical University',
    issueDate: '2024-02-14',
    tokensAwarded: 3,
    likes: 89,
    comments: 12,
    timestamp: '1 day ago'
  }
];

export function Feed() {
  const [certificates] = useState<Certificate[]>(mockCertificates);

  return (
    <div className="min-h-screen bg-gray-50 pt-16 pb-12">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Create Post Section */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-full bg-gray-200 flex items-center justify-center">
              <FileCheck className="h-6 w-6 text-gray-400" />
            </div>
            <button
              className="flex-1 bg-gray-100 hover:bg-gray-200 rounded-full py-2.5 px-4 text-left text-gray-600"
              onClick={() => alert('Upload certificate functionality coming soon!')}
            >
              Share your latest achievement...
            </button>
          </div>
        </div>

        {/* Certificate Feed */}
        <div className="space-y-6">
          {certificates.map((cert) => (
            <article key={cert.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
              {/* Post Header */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center space-x-3">
                  <img
                    src={cert.userAvatar}
                    alt={cert.userName}
                    className="h-10 w-10 rounded-full"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900">
                      {cert.userName}
                    </p>
                    <p className="text-sm text-gray-500">
                      {cert.timestamp}
                    </p>
                  </div>
                </div>

                {/* Certificate Details */}
                <div className="mt-4">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Award className="h-4 w-4" />
                    <span>Earned a certificate in {cert.certificateTitle}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                    <Calendar className="h-4 w-4" />
                    <span>Issued by {cert.issuer} on {cert.issueDate}</span>
                  </div>
                </div>

                {/* Certificate Image */}
                <div className="mt-4 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={cert.certificateImage}
                    alt={cert.certificateTitle}
                    className="w-full h-auto"
                  />
                </div>

                {/* Token Award Banner */}
                <div className="mt-4 bg-blue-50 border border-blue-100 rounded-md p-3 flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <Award className="h-5 w-5 text-blue-600" />
                    <span className="text-blue-700 font-medium">
                      {cert.tokensAwarded} Tokens Awarded!
                    </span>
                  </div>
                  <span className="text-sm text-blue-600">Verified ✓</span>
                </div>
              </div>

              {/* Post Actions */}
              <div className="border-t border-gray-200 px-4 py-3">
                <div className="flex items-center justify-between">
                  <div className="flex space-x-6">
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                      <ThumbsUp className="h-5 w-5" />
                      <span className="text-sm">{cert.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                      <MessageSquare className="h-5 w-5" />
                      <span className="text-sm">{cert.comments}</span>
                    </button>
                  </div>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                    <Share2 className="h-5 w-5" />
                    <span className="text-sm">Share</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}