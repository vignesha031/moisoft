import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
const buttonVariants = cva('button',{variants:{variant:{default:'button-primary',outline:'button-outline',green:'button-green',light:'button-outline light',ghost:'button-ghost'}},defaultVariants:{variant:'default'}});
export function Button({className,variant,asChild=false,...props}:React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants> & {asChild?:boolean}) {const Comp=asChild?Slot:'button';return <Comp className={twMerge(clsx(buttonVariants({variant}),className))} {...props}/>;}
