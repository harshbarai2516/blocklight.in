import React, { useEffect, useState } from 'react';
import { FaUser, FaClock, FaCalendarAlt, FaHeart, FaComment, FaSearch } from 'react-icons/fa';
import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from '../../firebase'
import { useNavigate } from 'react-router-dom';


const Daily = () => {
  const navigate = useNavigate();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterMsg, setNewsletterMsg] = useState('');
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      const querySnapshot = await getDocs(collection(db, "daily"));
      const posts = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setBlogPosts(posts);
      setLoading(false);
      console.log(posts);
    };
    fetchPosts();
  }, []);

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();
    setNewsletterMsg('');
    if (!newsletterEmail || !newsletterEmail.includes('@')) {
      setNewsletterMsg('Please enter a valid email address.');
      return;
    }
    try {
      await addDoc(collection(db, "newsletter"), { email: newsletterEmail, created: new Date() });
      setNewsletterMsg('Thank you for subscribing!');
      setNewsletterEmail('');
    } catch (err) {
      setNewsletterMsg('Subscription failed. Please try again.');
    }
  };

  // Popular posts data
  const popularPosts = [
    { id: 1, title: 'React Performance Optimization', views: 1250 },
    { id: 2, title: 'JavaScript ES6 Features', views: 980 },
    { id: 3, title: 'Building REST APIs with Node.js', views: 870 }
  ];

  return (
    <div className="blog-container">
      {/* Blog Header */}
      <header className="blog-header">
        <div className="blog-header-content">
          <h1>Daily Analysis</h1>
          {/* <div className="accent-bar"></div>
          <p>
            Insights, strategies, and the latest trends in blockchain and crypto—curated for the modern investor.
          </p> */}
        </div>
      </header>

      <style jsx>{`
  .blog-header {
    text-align: center;
    margin-bottom: 48px;
    padding-bottom: 32px;
    background: linear-gradient(90deg, #f8fafc 0%, #e3f0ff 100%);
    border-radius: 16px;
    box-shadow: 0 4px 24px 0 rgba(44,62,80,0.04);
  }
  .blog-header-content {
    max-width: 700px;
    margin: 0 auto;
    padding: 48px 16px 32px 16px;
  }
  .blog-header h1 {
    font-family: 'Montserrat', 'Segoe UI', Arial, sans-serif;
    font-size: 3rem;
    font-weight: 800;
    color: #1a237e;
    margin-bottom: 12px;
    letter-spacing: 1px;
  }
  .accent-bar {
    width: 80px;
    height: 5px;
    background: linear-gradient(90deg, #1976d2 0%, #00c6fb 100%);
    border-radius: 3px;
    margin: 0 auto 24px auto;
  }
  .blog-header p {
    font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
    color: #374151;
    font-size: 1.25rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2px;
  }
`}</style>

      <div className="blog-content">
        {/* Main Blog Posts */}
        <main className="blog-posts">
          {loading ? (
            <p>Loading...</p>
          ) : (
            blogPosts.map(post => (
              <article
                style={{ cursor: 'pointer' }}
                onClick={() => navigate('/general', { state: { study: post } })}
                key={post.id} className="blog-card">
                {post.imageUrl && (
                  <div className="blog-card-image">
                    <img src={post.imageUrl} alt={post.title} />
                    {post.category && <span className="category-tag">{post.category}</span>}
                  </div>
                )}

                <div className="blog-card-content">
                  <h2>{post.title}</h2>
                  <p className="excerpt">{post.excerpt}</p>

                  <div className="meta-info">
                    <span><FaUser /> {post.author}</span>
                    <span><FaCalendarAlt /> {post.date}</span>
                    <span><FaClock /> {post.readtime} mins read</span>
                  </div>
                </div>
              </article>
            ))
          )}

          {/* <div className="pagination">
                        <button className="active">1</button>
                        <button>2</button>
                        <button>3</button>
                        <button>Next →</button>
                    </div> */}
        </main>

        {/* Blog Sidebar */}
        <aside className="blog-sidebar">
          {/* <div className="sidebar-widget">
            <h3>Categories</h3>
            <ul className="categories-list">
              <li >React</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
            </ul>
          </div> */}

          {/* <div className="sidebar-widget">
                        <h3>Popular Posts</h3>
                        <ul className="popular-posts">
                            {popularPosts.map(post => (
                                <li key={post.id}>
                                    <a href="#">{post.title}</a>
                                    <span>{post.views} views</span>
                                </li>
                            ))}
                        </ul>
                    </div> */}

          <div className="sidebar-widget newsletter">
            <h3>Subscribe to Newsletter</h3>
            <p>Get the latest articles delivered to your inbox</p>
            <form onSubmit={handleNewsletterSubmit}>
              <input
                type="email"
                placeholder="Your email address"
                value={newsletterEmail}
                onChange={e => setNewsletterEmail(e.target.value)}
                required />
              <button type="submit">Subscribe</button>
            </form>
            {newsletterMsg && (
              <div style={{ marginTop: 8, color: newsletterMsg.startsWith('Thank') ? 'green' : 'crimson', fontSize: '0.95rem' }}>
                {newsletterMsg}
              </div>
            )}
          </div>
        </aside>
      </div>

      <style jsx>{`
        /* Base Styles */
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          color: #333;
        }
        
        .blog-header {
          text-align: center;
          margin-bottom: 40px;
          padding-bottom: 20px;
          border-bottom: 1px solid #eee;
        }
        
        .blog-header h1 {
          font-size: 2.5rem;
          color: #2c3e50;
          margin-bottom: 10px;
        }
        
        .blog-header p {
          color: #7f8c8d;
          font-size: 1.1rem;
          margin-bottom: 20px;
        }
        
        .search-bar {
          display: flex;
          max-width: 500px;
          margin: 0 auto;
        }
        
        .search-bar input {
          flex: 1;
          padding: 10px 15px;
          border: 1px solid #ddd;
          border-radius: 4px 0 0 4px;
          font-size: 1rem;
        }
        
        .search-bar button {
          padding: 0 15px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 0 4px 4px 0;
          cursor: pointer;
        }
        
        /* Blog Content Layout */
        .blog-content {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 30px;
        }
        
        /* Blog Posts */
        .blog-posts {
          display: flex;
          flex-direction: column;
          gap: 30px;
        }
        
        .blog-card {
          background: white;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .blog-card-image {
          position: relative;
          height: 200px;
          overflow: hidden;
        }
        
        .blog-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        .category-tag {
          position: absolute;
          top: 15px;
          right: 15px;
          background: #3498db;
          color: white;
          padding: 3px 10px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .blog-card-content {
          padding: 20px;
        }
        
        .blog-card-content h2 {
          margin: 0 0 15px 0;
          font-size: 1.5rem;
          color: #2c3e50;
        }
        
        .excerpt {
          color: #7f8c8d;
          line-height: 1.6;
          margin-bottom: 20px;
        }
        
        .meta-info {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
          margin-bottom: 15px;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .meta-info span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        .post-stats {
          display: flex;
          gap: 20px;
          padding-top: 15px;
          border-top: 1px solid #eee;
          color: #95a5a6;
          font-size: 0.9rem;
        }
        
        .post-stats span {
          display: flex;
          align-items: center;
          gap: 5px;
        }
        
        /* Pagination */
        .pagination {
          display: flex;
          justify-content: center;
          gap: 10px;
          margin-top: 30px;
        }
        
        .pagination button {
          padding: 8px 15px;
          border: 1px solid #ddd;
          background: white;
          border-radius: 4px;
          cursor: pointer;
        }
        
        .pagination button.active {
          background: #3498db;
          color: white;
          border-color: #3498db;
        }
        
        /* Sidebar */
        .blog-sidebar {
          display: flex;
          flex-direction: column;
          gap: 25px;
        }
        
        .sidebar-widget {
          background: white;
          border-radius: 8px;
          padding: 20px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        
        .sidebar-widget h3 {
          margin-top: 0;
          margin-bottom: 15px;
          color: #2c3e50;
        }
        
        .categories-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .categories-list li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
          cursor: pointer;
          transition: color 0.2s;
        }
        
        .categories-list li:hover {
          color: #3498db;
        }
        
        .popular-posts {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        
        .popular-posts li {
          padding: 10px 0;
          border-bottom: 1px solid #eee;
        }
        
        .popular-posts li a {
          display: block;
          color: #2c3e50;
          text-decoration: none;
          margin-bottom: 5px;
        }
        
        .popular-posts li span {
          font-size: 0.8rem;
          color: #95a5a6;
        }
        
        .newsletter form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        
        .newsletter input {
          padding: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        
        .newsletter button {
          padding: 10px;
          background: #3498db;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .blog-content {
            grid-template-columns: 1fr;
          }
          
          .blog-sidebar {
            order: -1;
          }
        }
      `}</style>
    </div>
  );
};

export default Daily;