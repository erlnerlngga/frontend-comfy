import { IoStar, IoStarHalf, IoStarOutline } from "react-icons/io5";

export default function Stars({ star }: { star: number }) {
  const stars = [];

  for (let i = 0; i < 5; i++) {
    const difference = parseFloat((star - i).toFixed(1));
    if (difference >= 1)
      stars.push(<IoStar className="text-yellow-500 w-5 h-5" />);
    else if (difference < 1 && difference > 0) {
      if (difference <= 0.2)
        stars.push(<IoStarOutline className="text-yellow-500 w-5 h-5" />);
      else if (difference > 0.2 && difference <= 0.6)
        stars.push(<IoStarHalf className="text-yellow-500 w-5 h-5" />);
      else stars.push(<IoStar className="text-yellow-500 w-5 h-5" />);
    } else stars.push(<IoStarOutline className="text-yellow-500 w-5 h-5" />);
  }

  return <>{stars}</>;
}
