import React, { useState, useEffect, useMemo } from "react";
import "./metronome.css";
import beatHi from "./sounds/Teeth/Teeth_hi.wav";
import beatLo from "./sounds/Teeth/Teeth_lo.wav";

const Metronome = () => {
	const [bpm, setBpm] = useState(100);
	const [beatsPerMeasure, setBeatsPerMeasure] = useState(4);
	const [isPlaying, setIsPlaying] = useState(false);
	const hiBeatSound = useMemo(() => new Audio(beatHi), []);
	const loBeatSound = useMemo(() => new Audio(beatLo), []);

	useEffect(() => {
		let interval;
		let totalBeats = 0;
		const resetSounds = () => {
			hiBeatSound.pause();
			loBeatSound.pause();
			hiBeatSound.currentTime = 0; // restarts the sound (from last second to first)
			loBeatSound.currentTime = 0;
		};

		const playOneBeat = () => {
			resetSounds();
			if (totalBeats % beatsPerMeasure === 0) hiBeatSound.play();
			else loBeatSound.play();

			totalBeats++;
		};

		if (isPlaying) {
			interval = setInterval(playOneBeat, (60 / bpm) * 1000);
		}

		return () => clearInterval(interval);
	}, [isPlaying, bpm, beatsPerMeasure, hiBeatSound, loBeatSound]);

	const handleStartStop = () => {
		setIsPlaying((prev) => !prev);
	};

	return (
		<main className="metronome__container">
			<div className="metronome__slider">
				<label>
					<p>{beatsPerMeasure}</p>
					<div className="divider" />
					<p>4</p>
				</label>
				<input
					type="range"
					min="2"
					max="20"
					value={beatsPerMeasure}
					onChange={(e) => setBeatsPerMeasure(e.target.value)}
				/>
			</div>
			<div className="metronome__slider">
				<label style={{ margin: "8px 0" }}>{bpm} BPM</label>
				<input
					type="range"
					min="50"
					max="220"
					value={bpm}
					onChange={(e) => setBpm(e.target.value)}
				/>
			</div>
			<button
				className="metronome__button"
				onClick={handleStartStop}
			>
				{isPlaying ? "Stop" : "Start"}
			</button>
		</main>
	);
};

export default Metronome;
