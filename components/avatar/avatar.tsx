import Image from "next/image";

interface AvatarProps {
  imgSrc: string;
  size?: number;
}

export const Avatar = ({ imgSrc, size = 64 }: AvatarProps) => {
  return (
    <div
      className="relative overflow-hidden rounded-full"
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <Image
        fill
        src={imgSrc}
        alt="Profile Picture"
        className="object-cover"
      />
    </div>
  );
};
