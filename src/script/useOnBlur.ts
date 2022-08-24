import { useEffect } from 'react';

const useOnBlur = (ref: any, callback: () => void) => {
    const handleClick = (e: { target: any }) => {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClick);

        return () => {
            document.removeEventListener('mousedown', handleClick);
        };
    });
};

export default useOnBlur;
