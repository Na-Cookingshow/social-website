import React from "react";  

const ImageDetail = ({ image, onClose }) => {
    if (!image) return null;

    return (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 py-8">
                <button
                    onClick={onClose}
                    className="fixed top-6 right-6 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-colors z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <img
                            src={image.image}
                            alt={image.title}
                            className="w-full rounded-2xl shadow-2xl max-h-[70vh] object-contain mx-auto"
                        />
                    </div>

                    <div className="bg-white rounded-2xl p-8 shadow-xl">
                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                                    {image.title}
                                </h1>
                                <div className="flex items-center space-x-4 text-gray-600">
                                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                                        {image.type}
                                    </span>
                                    {image.location && (
                                        <span className="flex items-center text-sm">
                                            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                            </svg>
                                            {/* {image.location} */}
                                        </span>
                                    )}
                                </div>
                            </div>

                            <div className="flex space-x-2">
                                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                    </svg>
                                </button>
                                <button className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors">
                                    <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        <div className="mb-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-3">Description</h2>
                            <p className="text-gray-600 leading-relaxed">
                                This is a beautiful image showcasing amazing content. Share your moments, explore creativity, and connect with others through visual storytelling.
                            </p>
                        </div>

                        <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">1.2k</div>
                                <div className="text-sm text-gray-600">Views</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">89</div>
                                <div className="text-sm text-gray-600">Likes</div>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl font-bold text-gray-900">23</div>
                                <div className="text-sm text-gray-600">Shares</div>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Comments</h2>
                            <div className="space-y-4">
                                <div className="flex space-x-3">
                                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                                        JD
                                    </div>
                                    <div className="flex-1">
                                        <div className="bg-gray-100 rounded-lg p-3">
                                            <p className="font-semibold text-gray-900 text-sm">John Doe</p>
                                            <p className="text-gray-700 text-sm">Amazing shot! Love the composition.</p>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1 ml-3">2 hours ago</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6">
                                <textarea
                                    placeholder="Add a comment..."
                                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                                    rows="3"
                                ></textarea>
                                <button className="mt-2 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                                    Post Comment
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ImageDetail;