from flask import Flask, jsonify, render_template
import keyboard

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/volume_up', methods=['POST'])
def volume_up():
    keyboard.press_and_release('volume up')
    return jsonify({'status': 'success', 'message': 'Volume increased'}), 200

@app.route('/api/volume_down', methods=['POST'])
def volume_down():
    keyboard.press_and_release('volume down')
    return jsonify({'status': 'success', 'message': 'Volume decreased'}), 200

@app.route('/api/play', methods=['POST'])
def play():
    keyboard.press_and_release('play/pause')  # Changed from 'play' to 'play/pause'
    return jsonify({'status': 'success', 'message': 'Playback started'}), 200

@app.route('/api/pause', methods=['POST'])
def pause():
    keyboard.press_and_release('play/pause')  # Changed from 'pause' to 'play/pause'
    return jsonify({'status': 'success', 'message': 'Playback paused'}), 200

@app.route('/api/stop', methods=['POST'])
def stop():
    try:
        # Try different key combinations for stop functionality
        keyboard.press_and_release('media_stop')
        return jsonify({'status': 'success', 'message': 'Playback stopped'}), 200
    except Exception as e:
        return jsonify({'status': 'error', 'message': f'Failed to stop playback: {str(e)}'}), 500

@app.route('/api/next_track', methods=['POST'])
def next_track():
    keyboard.press_and_release('next track')
    return jsonify({'status': 'success', 'message': 'Skipped to next track'}), 200

@app.route('/api/previous_track', methods=['POST'])
def previous_track():
    keyboard.press_and_release('previous track')
    return jsonify({'status': 'success', 'message': 'Returned to previous track'}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)