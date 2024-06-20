import { AiOutlineLoading } from 'react-icons/ai';

function Loading() {
  return (
    <div className="fixed inset-0 flex justify-center items-center text-lg">
      <div className="animate-spin">
        <AiOutlineLoading size={50} />
      </div>
    </div>
  );
}

export default Loading;
