/** @format */

export const color_palette = [
    {
        id: '001',
        name: 'navy-blue',
        color: '#122373',
    },
    {
        id: '002',
        name: 'sky-blue',
        color: '#0094df',
    },
    {
        id: '003',
        name: 'faded-purple',
        color: '#43406a',
    },
    {
        id: '004',
        name: 'vibrant-red',
        color: '#ff356f',
    },
    {
        id: '005',
        name: 'olive-green',
        color: '#2d5f62',
    },
    {
        id: '006',
        name: 'orange',
        color: '#ea864e',
    },
    {
        id: '007',
        name: 'green',
        color: '#127e58',
    },
    {
        id: '008',
        name: 'smooth-pink',
        color: '#ef7191',
    },
];

export function getRandomColor() {
    return color_palette[Math.floor(Math.random() * color_palette.length)]
        .color;
}
