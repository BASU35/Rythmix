import React from 'react'

// Import Audio Recorder
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'
import 'audio-react-recorder/dist/index.css'

class App extends React.Component {
    constructor(props) {
        super(props)

        // Initial state
        this.state = {
            recordState: null, // current recording state (START, PAUSE, STOP)
            audioData: null    // recorded audio data (Blob + URL)
        }
    }

    // Start recording
    start = () => {
        this.setState({
            recordState: RecordState.START
        })
    }

    // Pause recording
    pause = () => {
        this.setState({
            recordState: RecordState.PAUSE
        })
    }

    // Stop recording
    stop = () => {
        this.setState({
            recordState: RecordState.STOP
        })
    }

    // Called automatically when recording is stopped
    // "data" contains Blob + URL of recorded audio
    onStop = (data) => {
        this.setState({
            audioData: data
        })
        console.log('onStop: audio data', data)
    }

    render() {
        const { recordState } = this.state

        return (
            <div>
                {/* Audio waveform + recording logic */}
                <AudioReactRecorder
                    state={recordState}
                    onStop={this.onStop}
                    backgroundColor='rgb(255,255,255)' // White background
                />

                {/* Audio playback once recording is done */}
                <audio
                    id='audio'
                    controls
                    src={this.state.audioData ? this.state.audioData.url : null}
                ></audio>

                {/* Recording controls */}
                <button
