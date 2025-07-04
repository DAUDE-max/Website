from flask import Flask, render_template, send_from_directory
import os

# Create Flask app instance
app = Flask(__name__, 
           static_folder='.',  # Set current directory as static folder
           template_folder='.')  # Set current directory as template folder

# Configure the app
app.config['DEBUG'] = True

@app.route('/')
def home():
    """Serve the home page (index.html)"""
    return send_from_directory('.', 'index.html')

@app.route('/index.html')
def index():
    """Alternative route for index.html"""
    return send_from_directory('.', 'index.html')

@app.route('/leistungen.html')
def leistungen():
    """Serve the services page"""
    return send_from_directory('.', 'leistungen.html')

@app.route('/kontakt.html')
def kontakt():
    """Serve the contact page"""
    return send_from_directory('.', 'kontakt.html')

@app.route('/impressum.html')
def impressum():
    """Serve the impressum/legal page"""
    return send_from_directory('.', 'impressum.html')

@app.route('/css/<path:filename>')
def css_files(filename):
    """Serve CSS files"""
    return send_from_directory('css', filename)

@app.route('/img/<path:filename>')
def img_files(filename):
    """Serve image files"""
    return send_from_directory('img', filename)

@app.route('/scripts.js')
def scripts():
    """Serve JavaScript files"""
    return send_from_directory('.', 'scripts.js')

@app.route('/templates.js')
def templates():
    """Serve template JavaScript files"""
    return send_from_directory('.', 'templates.js')

@app.route('/<path:filename>')
def serve_static(filename):
    """Serve any other static files"""
    return send_from_directory('.', filename)

@app.errorhandler(404)
def not_found(error):
    """Handle 404 errors"""
    return f"<h1>404 - Page Not Found</h1><p>The page you're looking for doesn't exist.</p>", 404

if __name__ == '__main__':
    # Get the current directory
    current_dir = os.path.dirname(os.path.abspath(__file__))
    print(f"Starting Flask server...")
    print(f"Serving files from: {current_dir}")
    print(f"Website will be available at: http://localhost:5000")
    print(f"Press Ctrl+C to stop the server")
    
    # Run the Flask development server
    app.run(host='127.0.0.1', port=5000, debug=True)
