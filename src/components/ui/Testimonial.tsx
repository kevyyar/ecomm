import React from "react";
import { Quote, Star } from "lucide-react";

export interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  product?: string;
  avatar?: string;
  rating?: number;
  className?: string;
}

const Testimonial: React.FC<TestimonialProps> = ({
  quote,
  author,
  role,
  product,
  avatar,
  rating = 5,
  className = "",
}) => {
  return (
    <div
      className={`bg-(--color-bg-white) rounded-2xl shadow-lg p-8 sm:p-10 max-w-xl mx-auto bg-gradient-to-br from-(--color-bg-rose-50) via-white to-(--color-bg-gray-50) ${className}`}
    >
      {/* Quote & rating */}
      <div className="flex items-start gap-4">
        <Quote className="w-8 h-8 text-(--color-primary-pink-500)" />
        {rating > 0 && (
          <div className="flex items-center mt-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-5 h-5 ${
                  star <= rating
                    ? 'text-yellow-400 fill-current'
                    : 'text-gray-300 fill-current'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Quote text */}
      <p className="mt-6 text-lg italic text-(--color-text-gray-700) leading-relaxed">
        &ldquo;{quote}&rdquo;
      </p>

      {/* Author section */}
      <div className="flex items-center gap-4 mt-8">
        {avatar ? (
          <img
            src={avatar}
            alt={author}
            className="w-14 h-14 rounded-full object-cover shadow-sm border border-(--color-border-gray-200)"
          />
        ) : (
          <div className="w-14 h-14 rounded-full bg-(--color-bg-gray-100)" />
        )}
        <div>
          <h4 className="font-semibold text-(--color-text-gray-800)">
            {author}
          </h4>
          {role && (
            <p className="text-sm text-(--color-text-gray-600) leading-none">
              {role}
            </p>
          )}
          {product && (
            <p className="text-sm font-medium text-(--color-primary-pink-600) leading-none mt-1">
              {product}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;