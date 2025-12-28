import { cn } from "@/lib/utils";
import React from "react";

type PageHeaderProps = {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  description?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export function PageHeader({ title, subtitle, description, className, children }: PageHeaderProps) {
  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container mx-auto text-center">
        {typeof title === 'string' ? (
          <h1 className="text-4xl font-headline font-bold sm:text-5xl md:text-6xl text-balance">
            {title}
          </h1>
        ) : (
          title
        )}
        
        {subtitle && (
            typeof subtitle === 'string' ? (
                <p className="mt-4 max-w-2xl mx-auto text-muted-foreground md:text-lg">
                    {subtitle}
                </p>
            ) : (
                subtitle
            )
        )}
        
        {description && (
          typeof description === 'string' ? (
            <p className="mt-4 max-w-3xl mx-auto text-lg text-muted-foreground">
              {description}
            </p>
          ) : (
            description
          )
        )}
        
        {children}
      </div>
    </section>
  );
}
