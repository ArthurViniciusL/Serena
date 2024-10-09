import score from "./Review.module.css";
import { IconReview } from "@/modules/app.modules";

interface ReviewsProps {
    scoreServiceProvider: string;
}

export function Reviews({ scoreServiceProvider }: ReviewsProps) {
    const review = Number(scoreServiceProvider);

    const attributesIconReview = {
        fill: "var(--serena-yellow)",
        stroke: "",
        size: 20,
    };

    if (review <= 0) {
        return (
            <div className={score.container}>
                <p className={score.average}>
                    {review}
                </p>
                <div className={score.icons}>
                    <IconReview
                        size={attributesIconReview.size}
                        stroke="var(--bg-color-05)"
                    />
                </div>
            </div>
        );
    } else if (review >= 1 && review < 2) {
        return (
            <div className={score.container}>
                <p className={score.average}>
                    {review}
                </p>
                <div className={score.icons}>
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                </div>
            </div>
        );
    } else if (review >= 2 && review < 3) {
        return (
            <div className={score.container}>
                <p className={score.average}>
                    {review}
                </p>
                <div className={score.icons}>
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                </div>
            </div>
        );
    } else if (review >= 3 && review < 4) {
        return (
            <div className={score.container}>
                <p className={score.average}>
                    {review}
                </p>
                <div className={score.icons}>
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                </div>
            </div>
        );
    } else if (review >= 4 && review < 5) {
        return (
            <div className={score.container}>
                <p className={score.average}>
                    {review}
                </p>
                <div className={score.icons}>
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                </div>
            </div>
        );
    } else if (review >= 5) {
        return (
            <div className={score.container}>
                <p className={score.average}>
                    {review}
                </p>
                <div className={score.icons}>
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                    <IconReview
                        fill={attributesIconReview.fill}
                        stroke={attributesIconReview.stroke}
                        size={attributesIconReview.size}
                    />
                </div>
            </div>
        );
    }
}
