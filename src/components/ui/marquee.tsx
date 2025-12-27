// components/ui/marquee.tsx
import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

interface MarqueeProps {
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  speed?: number;
  repeat?: number;
  gradient?: boolean;
  gradientColor?: string;
  gap?: number;
  fadeEdges?: boolean;
}

const Marquee: React.FC<MarqueeProps> = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  speed = 50,
  repeat = 4,
  gradient = true,
  gradientColor = 'from-background',
  gap = 1,
  fadeEdges = true,
}) => {
  // Calculate animation duration based on speed
  const duration = 100 / speed;

  // Duplicate children for seamless loop
  const duplicatedChildren = React.Children.toArray(children);
  const allChildren = Array.from({ length: repeat }, (_, i) => (
    <React.Fragment key={i}>
      {duplicatedChildren.map((child, idx) => (
        <div key={`${i}-${idx}`} className="inline-flex items-center">
          {child}
        </div>
      ))}
    </React.Fragment>
  ));

  return (
    <div
      className={cn(
        'relative flex overflow-hidden',
        vertical ? 'flex-col h-[200px]' : 'w-full',
        className
      )}
    >
      {/* Fade edges */}
      {fadeEdges && (
        <>
          <div
            className={cn(
              'absolute inset-y-0 left-0 w-20 z-10 pointer-events-none',
              gradient && `bg-gradient-to-r ${gradientColor} to-transparent`
            )}
          />
          <div
            className={cn(
              'absolute inset-y-0 right-0 w-20 z-10 pointer-events-none',
              gradient && `bg-gradient-to-l ${gradientColor} to-transparent`
            )}
          />
        </>
      )}

      {/* Marquee container */}
      <motion.div
        className={cn(
          'flex',
          vertical ? 'flex-col' : 'flex-row',
          pauseOnHover && 'hover:[animation-play-state:paused]'
        )}
        animate={{
          [vertical ? 'y' : 'x']: [
            0,
            vertical
              ? -(100 / duplicatedChildren.length) * repeat * 100
              : -(100 / duplicatedChildren.length) * repeat * 100,
          ],
        }}
        transition={{
          [vertical ? 'y' : 'x']: {
            duration: duration * duplicatedChildren.length,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
        style={{
          [vertical ? 'gap' : 'gap']: `${gap}rem`,
        }}
      >
        {allChildren}
      </motion.div>
    </div>
  );
};

// Advanced Marquee with multiple effects
interface AdvancedMarqueeProps extends MarqueeProps {
  variant?: 'default' | 'cards' | 'logos' | 'testimonials' | 'gradient';
  direction?: 'left' | 'right' | 'up' | 'down';
  bounce?: boolean;
}

export const AdvancedMarquee: React.FC<AdvancedMarqueeProps> = ({
  variant = 'default',
  direction = 'left',
  bounce = false,
  children,
  className,
  ...props
}) => {
  const directionClass = {
    left: 'flex-row',
    right: 'flex-row-reverse',
    up: 'flex-col',
    down: 'flex-col-reverse',
  }[direction];

  const baseAnimation = {
    x: direction === 'left' ? ['0%', '-100%'] : direction === 'right' ? ['0%', '100%'] : undefined,
    y: direction === 'up' ? ['0%', '-100%'] : direction === 'down' ? ['0%', '100%'] : undefined,
  };

  const bounceAnimation = bounce
    ? {
        x: direction === 'left' || direction === 'right' ? ['0%', '-50%', '0%'] : undefined,
        y: direction === 'up' || direction === 'down' ? ['0%', '-50%', '0%'] : undefined,
      }
    : undefined;

  const animation = bounce ? bounceAnimation : baseAnimation;

  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        className={cn('flex', directionClass)}
        animate={animation}
        transition={{
          duration: props.speed ? 100 / props.speed : 20,
          repeat: Infinity,
          ease: bounce ? 'easeInOut' : 'linear',
        }}
      >
        {React.Children.map(children, (child, index) => (
          <div
            className={cn(
              'flex-shrink-0',
              variant === 'cards' && 'px-4',
              variant === 'logos' && 'px-8',
              variant === 'testimonials' && 'px-6'
            )}
          >
            {child}
          </div>
        ))}
        {/* Duplicate for seamless loop */}
        {React.Children.map(children, (child, index) => (
          <div
            className={cn(
              'flex-shrink-0',
              variant === 'cards' && 'px-4',
              variant === 'logos' && 'px-8',
              variant === 'testimonials' && 'px-6'
            )}
          >
            {child}
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Logo Marquee Component
export const LogoMarquee: React.FC<{
  logos: Array<{
    name: string;
    logo?: React.ReactNode;
    imageUrl?: string;
  }>;
  speed?: number;
  className?: string;
}> = ({ logos, speed = 40, className }) => {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          duration: 100 / speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {/* Double the logos for seamless loop */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-12 flex items-center justify-center group"
          >
            <div className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/30 transition-all duration-300">
              {logo.logo ? (
                <div className="w-24 h-24 flex items-center justify-center">
                  {logo.logo}
                </div>
              ) : logo.imageUrl ? (
                <div className="w-24 h-24 relative">
                  <img
                    src={logo.imageUrl}
                    alt={logo.name}
                    className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ) : (
                <div className="w-24 h-24 flex items-center justify-center text-xl font-bold">
                  {logo.name.charAt(0)}
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Testimonial Marquee Component
export const TestimonialMarquee: React.FC<{
  testimonials: Array<{
    quote: string;
    author: string;
    role: string;
    avatar?: string;
  }>;
  speed?: number;
  className?: string;
}> = ({ testimonials, speed = 30, className }) => {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          duration: 100 / speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div key={index} className="flex-shrink-0 px-6 w-[400px]">
            <div className="p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-300 h-full">
              <div className="text-white/80 italic text-lg mb-6 leading-relaxed">
                "{testimonial.quote}"
              </div>
              <div className="flex items-center gap-4">
                {testimonial.avatar && (
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.author}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div>
                  <div className="font-bold text-white">{testimonial.author}</div>
                  <div className="text-white/60 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Gradient Text Marquee
export const GradientTextMarquee: React.FC<{
  texts: string[];
  gradient?: string;
  speed?: number;
  className?: string;
}> = ({ texts, gradient = 'from-blue-500 via-purple-500 to-pink-500', speed = 60, className }) => {
  return (
    <div className={cn('relative overflow-hidden', className)}>
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      <motion.div
        className="flex"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          duration: 100 / speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...texts, ...texts].map((text, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-12 flex items-center"
          >
            <div className="flex items-center gap-4">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient}`} />
              <span className={`text-2xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                {text}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Stats Marquee
export const StatsMarquee: React.FC<{
  stats: Array<{
    value: string;
    label: string;
    icon?: React.ReactNode;
  }>;
  speed?: number;
  className?: string;
}> = ({ stats, speed = 50, className }) => {
  return (
    <div className={cn('relative overflow-hidden py-8', className)}>
      <motion.div
        className="flex items-center"
        animate={{ x: ['0%', '-100%'] }}
        transition={{
          duration: 100 / speed,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {[...stats, ...stats].map((stat, index) => (
          <div
            key={index}
            className="flex-shrink-0 px-12 flex items-center gap-6"
          >
            {stat.icon && (
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                {stat.icon}
              </div>
            )}
            <div className="text-center">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Marquee;