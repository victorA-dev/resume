export const Logo = ({
    id,
    color,
    ...props
}: React.SVGProps<SVGSVGElement>) => {
    const markerId = `${id}-m`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={38.393}
            height={25.671}
            viewBox="0 0 10.158 6.792"
            {...props}
            id={id}
        >
            <defs>
                <marker
                    id={markerId}
                    markerHeight={0.75}
                    markerWidth={0.75}
                    orient="auto-start-reverse"
                    preserveAspectRatio="xMidYMid"
                    refX={8}
                    refY={-2}
                    style={{
                        overflow: 'visible',
                    }}
                    viewBox="0 0 1 1"
                >
                    <g transform="scale(.5)">
                        <circle
                            cx={4}
                            r={1}
                            style={{
                                fill: 'context-stroke',
                                stroke: 'context-stroke',
                            }}
                        />
                        <circle
                            cx={8}
                            r={1}
                            style={{
                                fill: 'context-stroke',
                                stroke: 'context-stroke',
                            }}
                        />
                        <circle
                            cx={12}
                            r={1}
                            style={{
                                fill: 'context-stroke',
                                stroke: 'context-stroke',
                            }}
                        />
                    </g>
                </marker>
            </defs>
            <g transform="translate(-.844 -.835)">
                <path
                    d="m1.056 1.108 3.12 6.423 2.56-6.46 3.643 6.444"
                    style={{
                        fill: 'none',
                        fillOpacity: 1,
                        strokeWidth: 0.264583,
                    }}
                />
                <path
                    d="m1.195 1.196 3.063 6.27L7.602.995l3.05 6.272"
                    style={{
                        fill: 'none',
                        fillOpacity: 1,
                        stroke: color,
                        strokeWidth: 0.702469,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'bevel',
                        strokeDasharray: 'none',
                        strokeDashoffset: 0,
                        strokeOpacity: 1,
                        markerStart: `url(#${markerId})`,
                        paintOrder: 'normal',
                    }}
                />
                <ellipse
                    cx={7.582}
                    cy={4.983}
                    rx={1.009}
                    ry={0.775}
                    style={{
                        fill: color,
                        fillOpacity: 1,
                        stroke: 'none',
                        strokeWidth: 0.669107,
                        strokeLinecap: 'round',
                        strokeLinejoin: 'bevel',
                        strokeDasharray: 'none',
                        strokeDashoffset: 0,
                        strokeOpacity: 1,
                        paintOrder: 'normal',
                    }}
                />
            </g>
        </svg>
    );
};
