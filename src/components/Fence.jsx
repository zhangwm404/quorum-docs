import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import copy from 'copy-to-clipboard';
import { MdContentCopy, MdCheck } from 'react-icons/md';
import { HiChevronDoubleDown } from 'react-icons/hi';
import clsx from 'clsx'

export function Fence({ children, language }) {
  const [copied, setCopied] = React.useState(false);
  const [expand, setExpand] = React.useState(false);
  const [canExpand, setCanExpand] = React.useState(false);
  const codeRef = React.useRef();

  React.useEffect(() => {
    if (copied) {
      copy(children.trimEnd());
      const to = setTimeout(setCopied, 1000, false);
      return () => clearTimeout(to);
    }
  }, [copied, children]);

  React.useEffect(() => {
    const handleExpand = () => {
      if (codeRef.current && (codeRef.current.scrollHeight > codeRef.current.clientHeight || codeRef.current.clientHeight > 240)) {
        setCanExpand(true);
      } else {
        setCanExpand(false);
      }
    };

    setTimeout(handleExpand, 50);
    window.addEventListener('resize', handleExpand);
    return () => {
      window.removeEventListener('resize', handleExpand);
    };
  }, []);

  return (
    <Highlight
      {...defaultProps}
      code={children.trimEnd()}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={clsx(className, 'relative')} style={style}>
          <div onClick={() => setCopied(true)} className="absolute top-1 right-1 opacity-70 cursor-pointer text-[16px] py-3 px-2 bg-[#0D1117] dark:bg-gray-800/90">
            {copied ? <MdCheck /> : <MdContentCopy />}
          </div>
          <code ref={codeRef} className={clsx({
            'fold': !expand,
            'expand': expand
          })}>
            {tokens.map((line, index) => (
              <React.Fragment key={index}>
                {line.map((token, index) => (
                  <span key={index} {...getTokenProps({ token })} />
                ))}
                {'\n'}
              </React.Fragment>
            ))}
          </code>
          {canExpand && !expand && (
            <div className="absolute bottom-0 inset-x-0 flex justify-center text-2xl bg-gradient-to-t text-white/90 dark:text-white/70 from-[#777] dark:from-[#444] to-transparent dark:to-transparent py-[10px] cursor-pointer" onClick={() => {
              setExpand(true);
            }}>
              <HiChevronDoubleDown />
            </div>
          )}
        </pre>
      )}
    </Highlight>
  )
}
