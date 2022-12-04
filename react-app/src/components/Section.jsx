import { useInView } from 'react-intersection-observer';
const Section = () => {
	const { ref, inView } = useInView({
		threshold: 0.5, // 50% of visibility
		triggerOnce: true,

		onChange: () => {
			console.log('Done');
		},
	});
	return (
		<div
			ref={ref}
			className='inview-block'
			inView={inView}
			style={{ backgroundColor: 'red', height: '200px' }}
		>
			<h2>
				Element is inside the viewport: 1 <strong>{inView.toString()}</strong>
			</h2>
		</div>
	);
};

export default Section;
