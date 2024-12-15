import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../config/firebase';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';
import { saveContent, getContent, uploadImage } from '../../utils/firebase';
import { useDropzone } from 'react-dropzone';
import { toast } from 'react-hot-toast';
import { LogOut, Upload, Trash2, Save } from 'lucide-react';

export default function Dashboard() {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useFirebaseAuth();
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState({
    team: {
      daniyal: {
        image: '',
        name: 'Daniyal Zahid',
        role: 'Tech Expert',
        bio: 'MSc Data Science, MBA Finance, Data Expert (University of California Davis), Google Certified.'
      },
      efstathious: {
        image: '',
        name: 'Efstathious Mouzakis',
        role: 'Marketing & Administration Expert',
        bio: 'Marketing and Admin expert 5 years of industry experience in Greece and London.'
      }
    },
    services: []
  });

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/admin/login');
    } else if (user) {
      loadContent();
    }
  }, [user, authLoading, navigate]);

  const loadContent = async () => {
    try {
      const data = await getContent();
      if (data) {
        setContent(data);
      }
    } catch (error) {
      console.error('Error loading content:', error);
      toast.error('Failed to load content');
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/admin/login');
    } catch (error) {
      console.error('Error signing out:', error);
      toast.error('Failed to sign out');
    }
  };

  const handleImageUpload = async (files: File[], section: string, index?: string) => {
    if (files.length === 0) return;

    setLoading(true);
    try {
      const file = files[0];
      const url = await uploadImage(file, `${section}/${index || 'general'}`);

      if (section === 'team' && index) {
        setContent(prev => ({
          ...prev,
          team: {
            ...prev.team,
            [index]: {
              ...prev.team[index as keyof typeof prev.team],
              image: url
            }
          }
        }));
      }

      toast.success('Image uploaded successfully');
    } catch (error) {
      console.error('Error uploading image:', error);
      toast.error('Failed to upload image');
    } finally {
      setLoading(false);
    }
  };

  const handleContentSave = async () => {
    setLoading(true);
    try {
      await saveContent(content);
      toast.success('Content saved successfully');
    } catch (error) {
      console.error('Error saving content:', error);
      toast.error('Failed to save content');
    } finally {
      setLoading(false);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1
  });

  if (authLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <nav className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
            </div>
            <div className="flex items-center">
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="space-y-8">
            {/* Team Section */}
            <section className="bg-white dark:bg-gray-800 shadow rounded-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Team Members</h2>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {Object.entries(content.team).map(([member, data]) => (
                  <div key={member} className="space-y-4">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white capitalize">{member}</h3>
                    <div {...getRootProps()} className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                      <input {...getInputProps()} onChange={(e) => {
                        if (e.target.files) {
                          handleImageUpload([e.target.files[0]], 'team', member);
                        }
                      }} />
                      {data.image ? (
                        <div className="relative">
                          <img src={data.image} alt={data.name} className="w-full h-48 object-cover rounded-lg" />
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setContent(prev => ({
                                ...prev,
                                team: {
                                  ...prev.team,
                                  [member]: {
                                    ...prev.team[member as keyof typeof prev.team],
                                    image: ''
                                  }
                                }
                              }));
                            }}
                            className="absolute top-2 right-2 p-2 bg-red-600 text-white rounded-full hover:bg-red-700"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-col items-center">
                          <Upload className="h-12 w-12 text-gray-400" />
                          <p className="mt-2 text-sm text-gray-500">Drop an image or click to upload</p>
                        </div>
                      )}
                    </div>
                    <input
                      type="text"
                      value={data.name}
                      onChange={(e) => setContent(prev => ({
                        ...prev,
                        team: {
                          ...prev.team,
                          [member]: { ...data, name: e.target.value }
                        }
                      }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Name"
                    />
                    <input
                      type="text"
                      value={data.role}
                      onChange={(e) => setContent(prev => ({
                        ...prev,
                        team: {
                          ...prev.team,
                          [member]: { ...data, role: e.target.value }
                        }
                      }))}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Role"
                    />
                    <textarea
                      value={data.bio}
                      onChange={(e) => setContent(prev => ({
                        ...prev,
                        team: {
                          ...prev.team,
                          [member]: { ...data, bio: e.target.value }
                        }
                      }))}
                      rows={3}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                      placeholder="Bio"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Save Button */}
            <div className="flex justify-end">
              <button
                onClick={handleContentSave}
                disabled={loading}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              >
                <Save className="h-4 w-4 mr-2" />
                {loading ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}