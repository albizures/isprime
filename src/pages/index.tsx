import React from 'react';
import Head from 'next/head';
import { getRandomItem, isPrime } from '../utils';

const yesEmojis = ['😁', '😍', '🤩', '🥳', '🙌', '🤗'];
const noEmojis = ['😒', '😤', '😭', '😫', '🙄', '😓'];

const Index: React.FC = () => {
	const [value, setValue] = React.useState('');

	const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value);
	};

	return (
		<div className="mx-auto flex justify-center items-center text-center flex-col px-2">
			<Head>
				{process.env.NODE_ENV === 'production' && (
					<script
						data-goatcounter="https://isprime.goatcounter.com/count"
						async
						src="//gc.zgo.at/count.js"
					></script>
				)}
			</Head>
			<a
				href="https://github.com/albizures/isprime"
				className="github-corner"
				aria-label="View source on GitHub"
			>
				<svg
					width="80"
					height="80"
					viewBox="0 0 250 250"
					aria-hidden="true"
					className="github"
				>
					<path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
					<path
						d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
						fill="currentColor"
						className="octo-arm"
					></path>
					<path
						d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
						fill="currentColor"
						className="octo-body"
					></path>
				</svg>
			</a>
			<h1 className="title block text-6xl font-light text-gray-800 mt-8 md:mt-10">
				Is prime?
			</h1>
			<label className="sr-only" htmlFor="number">
				enter a number
			</label>
			<input
				id="number"
				onChange={onChange}
				autoFocus={true}
				autoComplete="off"
				className="input w-full rounded my-2 text-center bg-gray-100 focus:bg-gray-300 focus:outline-none max-w-2xl"
				type="number"
				name="number"
			/>
			<h2 className="text-4xl text-gray-700 pb-3 font-light">
				Check if a number is prime 🚀
			</h2>
			{value &&
				value.length !== 0 &&
				(isPrime(Number(value)) ? (
					<span className="text-6xl text-teal-500">
						Yes! {getRandomItem(yesEmojis)}
					</span>
				) : (
					<span className="text-6xl text-red-600">
						No {getRandomItem(noEmojis)}
					</span>
				))}
		</div>
	);
};

export default Index;
