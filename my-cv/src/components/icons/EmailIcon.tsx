import React from 'react';

const EmailIcon: React.FC<{ className?: string }> = ({ className }) =>
(
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        className={className}
        fill="currentColor"
        aria-hidden="true"
    >
        <title>Email</title>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <path
                d="M47 4v28a4.025 4.025 0 0 1-1.17 2.83L39 28 28 17l-.28-.43z"
                fill="#f6b445"
            />
            <path
                d="m39 28 6.83 6.83A4.025 4.025 0 0 1 43 36H5a4.025 4.025 0 0 1-2.83-1.17L9 28l11-11 .25-.39L24 19l3.72-2.43.28.43z"
                fill="#fed049"
            />
            <path
                d="M20.25 16.61 20 17 9 28l-6.83 6.83A4.025 4.025 0 0 1 1 32V6a3.944 3.944 0 0 1 .18-1.19L2 5z"
                fill="#f6b445"
            />
            <path
                d="M47 4 27.72 16.57 24 19l-3.75-2.39L2 5l-.82-.19A4 4 0 0 1 5 2h37c4 0 5 2 5 2z"
                fill="#fed049"
            />
            <path
                d="m2 5 22 14L47 4v28a4 4 0 0 1-4 4H32a1.959 1.959 0 0 0-2 2v6"
                fill="none"
                stroke="#474c54"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
            <path
                d="M42 2H5a4 4 0 0 0-4 4v26a4 4 0 0 0 4 4h11a1.959 1.959 0 0 1 2 2v6M39 28 28 17M9 28l11-11M24 36v4M24 44v2"
                fill="none"
                stroke="#474c54"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
            />
        </g>
    </svg>
);

export default EmailIcon;