
import './newprompt.css';
import { useEffect, useRef } from 'react';

const Newprompt = () => {
    const endRef = useRef(null);

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);
  return (
    <>
      {/* Add new chat */}
      
      <div className="endchat" ref={endRef}></div>
      <form className='newform'>
        <label htmlFor="file">
          <img src="/attachment.png" alt="Attachment Icon" />
        </label>
        <input id="file" type="file" multiple={false} hidden />
        <input type='text' placeholder='Ask anything...' />
        <button type="submit">
          <img src="/arrow.png" alt="Submit Icon" />
        </button>
      </form>
    </>
  );
}

export default Newprompt;
