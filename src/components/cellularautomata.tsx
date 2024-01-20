// File: app/components/CellularAutomata.tsx

"use client";

import { useEffect, useRef } from 'react';

const CellularAutomata = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return; // Additional check for context

        const width = 100;
        const height = window.innerHeight;
        const cellSize = 10; // Size of each cell in the grid
        const cols = Math.floor(width / cellSize);
        const rows = Math.floor(height / cellSize);
        const updateInterval = 500; // Interval in milliseconds

        canvas.width = width;
        canvas.height = height;

        let grid = createGrid(cols, rows);

        const update = () => {
            grid = nextGridState(grid, cols, rows);
            drawGrid(ctx, grid, cols, rows, cellSize);
            setTimeout(() => requestAnimationFrame(update), updateInterval);
        };

        update();

        function createGrid(cols: number, rows: number) {
            const grid = new Array(cols);
            for (let i = 0; i < cols; i++) {
                grid[i] = new Array(rows).fill(0).map(() => Math.floor(Math.random() * 2));
            }
            return grid;
        }

        function drawGrid(ctx: CanvasRenderingContext2D, grid: any[], cols: number, rows: number, cellSize: number) {
            for (let x = 0; x < cols; x++) {
                for (let y = 0; y < rows; y++) {
                    const value = grid[x][y];
                    ctx.fillStyle = value ? 'black' : 'white';
                    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
                }
            }
        }

        function nextGridState(grid: any[], cols: number, rows: number) {
            const nextGrid = new Array(cols);
            for (let x = 0; x < cols; x++) {
                nextGrid[x] = new Array(rows);
                for (let y = 0; y < rows; y++) {
                    const state = grid[x][y];
                    // Simple rule for demonstration: toggle state randomly
                    nextGrid[x][y] = Math.random() > 0.5 ? 1 - state : state;
                }
            }
            return nextGrid;
        }

        return () => {
            // Cleanup if needed
        };
    }, []);

    return <canvas
    ref={canvasRef}
    className="fixed top-0 right-0 w-[10] h-full z-[-1]"
    style={{
      zIndex: -1, // Ensure it stays behind other elements
      // filter: 'blur(3px)' // Apply a blur effect
  }}
    ></canvas>;
};

export default CellularAutomata;
