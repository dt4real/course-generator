
type Props = {
	params:{
		courseId: String
	};
};

const CreateChapters = ({ params: { courseId }}: Props) => {
	console.log(courseId);
  return (
	<div>CreateChapters</div>
  )
}

export default CreateChapters;
