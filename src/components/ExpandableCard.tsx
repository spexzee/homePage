// src/components/ExpandableCard.tsx
import { ChevronDown, ChevronUp } from 'lucide-react';
import React, { useState } from 'react';

interface ExpandableCardProps {
    title: string;
    icon: React.ReactNode;
    className?: string;
    children?: React.ReactNode;
}

const ExpandableCard: React.FC<ExpandableCardProps> = ({ title, icon, className, children }) => {
    const [expanded, setExpanded] = useState<boolean>(false);

    const toggleExpand = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={`expandable-card ${className || ''} p-4`}>
            <div onClick={toggleExpand} className="cursor-pointer flex items-center justify-between">
                <div className="flex items-center">
                    {icon}
                    <span className="ml-2 font-semibold">{title}</span>
                </div>
                {expanded ? <ChevronUp className="text-blue-500" /> : <ChevronDown className="text-blue-500" />}
            </div>
            {expanded && <div className="mt-4">{children}</div>}
        </div>
    );
};

export default ExpandableCard;
