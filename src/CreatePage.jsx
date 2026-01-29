import { useState } from "react";

export default function CreatePage({ onAddPost }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [board, setBoard] = useState("");
  const [tags, setTags] = useState("");

  const boards = ["Nature", "Food", "Travel", "Dogs", "Cats", "Books"]; // Example boards

  const handleFileChange = (e) => {
    const selected = e.target.files[0];
    if (selected) setFile(URL.createObjectURL(selected));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !file) return alert("Title and image are required!");
    
    const newPost = {
      id: Date.now(),
      title,
      description,
      link,
      board,
      tags: tags.split(",").map(t => t.trim()),
      image: file,
      category: board.toLowerCase(),
    };
    
    onAddPost(newPost);

    // Reset form
    setFile(null);
    setTitle("");
    setDescription("");
    setLink("");
    setBoard("");
    setTags("");
  };

  return (
    <div className="pt-20 px-8 pb-8 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Create New Post</h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Image Upload */}
        <div>
          <label className="block mb-2 font-semibold">Upload Image</label>
          <div 
            className="border-2 border-gray-300 border-dashed rounded-xl h-64 flex items-center justify-center text-center cursor-pointer hover:border-blue-400"
            onClick={() => document.getElementById("fileInput").click()}
          >
            {file ? (
              <img src={file} alt="Preview" className="h-full w-full object-cover rounded-xl"/>
            ) : (
              <div>
                <p className="mb-2">Choose a file or drag and drop it here</p>
                <p className="text-sm text-gray-500">
                  We recommend using high quality .jpg files less than 20 MB or .mp4 files less than 200 MB.
                </p>
              </div>
            )}
          </div>
          <input 
            id="fileInput"
            type="file" 
            className="hidden" 
            onChange={handleFileChange} 
            accept="image/*,video/*"
          />
          <button 
            type="button" 
            className="mt-4 w-full py-2 bg-gray-200 rounded hover:bg-gray-300"
            onClick={() => {
              const url = prompt("Enter image URL");
              if (url) setFile(url);
            }}
          >
            Save from URL
          </button>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4">
          <div>
            <label className="block mb-1 font-semibold">Title</label>
            <input 
              type="text" 
              placeholder="Add a title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Description</label>
            <textarea 
              placeholder="Add a detailed description" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 h-32"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Link</label>
            <input 
              type="text" 
              placeholder="Add a link" 
              value={link}
              onChange={(e) => setLink(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div>
            <label className="block mb-1 font-semibold">Board</label>
            <select 
              value={board}
              onChange={(e) => setBoard(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="">Choose a board</option>
              {boards.map(b => <option key={b} value={b}>{b}</option>)}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-semibold">Tags</label>
            <input 
              type="text" 
              placeholder="Search for a tag (comma separated)" 
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full p-3 rounded-xl bg-gray-100 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button 
            type="submit" 
            className="mt-4 py-3 bg-blue-500 text-white font-semibold rounded-xl hover:bg-blue-600"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
