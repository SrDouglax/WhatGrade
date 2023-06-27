import './component.scss';

// <<---- Importações ---->> \\
import { useEffect, useRef } from 'react';

import Message from './Message/Message';

export default ({ messages, user, deleteMessage, loadMoreMessages }: any) => {
  const bodyRef = useRef<HTMLElement>();

  const handleScroll = (e: any) => {
    if (e.target.scrollTop <= 0) {
      const firstChild = bodyRef?.current?.firstChild as HTMLElement;
      const lastPoint = firstChild?.clientHeight;
      loadMoreMessages().then(() => {
        setTimeout(() => {
          (bodyRef.current as unknown as HTMLElement).scrollTop =
            firstChild?.clientHeight - lastPoint;
        }, 1);
      });
    }
  };

  useEffect(() => {
    const bRef = bodyRef?.current as HTMLElement;
    if ((bRef?.firstChild as HTMLElement).clientHeight <= bRef?.clientHeight) {
      loadMoreMessages().then(() => {
        setTimeout(() => {
          bRef.scrollTop = bRef.scrollHeight;
        }, 100);
      });
    }

    if (
      Math.round(bRef.scrollTop + bRef?.clientHeight) ==
      Math.round(
        (bRef?.firstChild as HTMLElement)?.clientHeight -
          (bRef.firstChild?.firstChild?.lastChild as HTMLElement)?.clientHeight
      )
    ) {
      bRef.scrollTop =
        (bRef?.firstChild as HTMLElement)?.clientHeight - bRef?.clientHeight;
    }
  }, [messages.length]);

  return (
    <div className="boxAllMessages" ref={bodyRef as any} onScroll={handleScroll}>
      <div>
        <div className="allMessages">
          {messages?.map((item: { sender: any; type: string }, key: any) => {
            if (item.sender != undefined || item.type === "style") {
              return (
                <Message
                  key={key}
                  message={item}
                  user={user}
                  deleteMessage={deleteMessage}
                />
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};
