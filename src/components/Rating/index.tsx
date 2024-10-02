interface ReviewsProps {
    nota: string;
}

export function Reviews({nota}:ReviewsProps) {
    
    const userReview = Number(nota);

    return (
        <p>{userReview}</p>
    )
}