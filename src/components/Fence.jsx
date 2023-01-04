import * as React from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import copy from 'copy-to-clipboard';
import { MdContentCopy, MdCheck } from 'react-icons/md';
import clsx from 'clsx'

export function Fence({ children, language }) {
  const [copied, setCopied] = React.useState(false);

  React.useEffect(() => {
    if (copied) {
      copy(children.trimEnd());
      const to = setTimeout(setCopied, 1000, false);
      return () => clearTimeout(to);
    }
  }, [copied, children]);

  return (
    <Highlight
      {...defaultProps}
      code={children.trimEnd()}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getTokenProps }) => (
        <pre className={clsx(className, 'relative')} style={style}>
          <div onClick={() => setCopied(true)} className="absolute top-1 right-1 opacity-70 cursor-pointer text-[16px] p-2">
            {copied ? <MdCheck /> : <MdContentCopy />}
          </div>
          <code>
            {tokens.map((line, index) => (
              <React.Fragment key={index}>
                {line.map((token, index) => (
                  <span key={index} {...getTokenProps({ token })} />
                ))}
                {'\n'}
              </React.Fragment>
            ))}
          </code>
        </pre>
      )}
    </Highlight>
  )
}
