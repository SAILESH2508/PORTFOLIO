import { useEffect, useState } from 'react';

interface Emoji {
  id: number;
  emoji: string;
  left: number;
  delay: number;
  duration: number;
}

export default function FloatingEmojis() {
  const [emojis, setEmojis] = useState<Emoji[]>([]);

  useEffect(() => {
    const emojiList = ['🎉', '🚀', '⭐', '💻', '🎯', '✨', '🔥', '💡', '🎨', '🏆'];
    const newEmojis: Emoji[] = [];

    for (let i = 0; i < 15; i++) {
      newEmojis.push({
        id: i,
        emoji: emojiList[Math.floor(Math.random() * emojiList.length)],
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 10
      });
    }

    setEmojis(newEmojis);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {emojis.map((emoji) => (
        <div
          key={emoji.id}
          className="absolute text-2xl opacity-20 animate-float-up"
          style={{
            left: `${emoji.left}%`,
            bottom: '-50px',
            animationDelay: `${emoji.delay}s`,
            animationDuration: `${emoji.duration}s`
          }}
        >
          {emoji.emoji}
        </div>
      ))}
    </div>
  );
}
