const heroTilesGraphics = document.querySelectorAll('[data-hero-tiles-graphic]');

const heroTileAnimationConfig = {
    initialDelayMs: 450,
    gridFadeDurationMs: 1800,
    columnDelayMs: 220,
    tileStaggerSpreadMs: 120,
    tileRevealStepMs: 24,
    tileRevealDurationMs: 620,
    letterHoldMs: 900,
    cyclePauseMs: 1400,
    tileRemovalSpreadMs: 520,
    tileAddSpreadMs: 420,
    letterTransitionDurationMs: 540,
    columnOrder: ['a', 'b', 'c', 'd', 'e'],
};

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const heroTileLetterTargets = {
    E: new Set([
        'Tile 1a', 'Tile 1b', 'Tile 1c', 'Tile 1d', 'Tile 1e',
        'Tile 2a',
        'Tile 3a',
        'Tile 4a', 'Tile 4b', 'Tile 4c', 'Tile 4d', 'Tile 4e',
        'Tile 5a',
        'Tile 6a',
        'Tile 7a', 'Tile 7b', 'Tile 7c', 'Tile 7d', 'Tile 7e',
    ]),
    K: new Set([
        'Tile 1a', 'Tile 1e',
        'Tile 2a', 'Tile 2d',
        'Tile 3a', 'Tile 3c',
        'Tile 4a', 'Tile 4b',
        'Tile 5a', 'Tile 5c',
        'Tile 6a', 'Tile 6d',
        'Tile 7a', 'Tile 7e',
    ]),
    O: new Set([
        'Tile 1b', 'Tile 1c', 'Tile 1d',
        'Tile 2a', 'Tile 2e',
        'Tile 3a', 'Tile 3e',
        'Tile 4a', 'Tile 4e',
        'Tile 5a', 'Tile 5e',
        'Tile 6a', 'Tile 6e',
        'Tile 7b', 'Tile 7c', 'Tile 7d',
    ]),
    W: new Set([
        'Tile 1b', 'Tile 1d',
        'Tile 2a', 'Tile 2c', 'Tile 2e',
        'Tile 3a', 'Tile 3c', 'Tile 3e',
        'Tile 4a', 'Tile 4c', 'Tile 4e',
        'Tile 5a', 'Tile 5c', 'Tile 5e',
        'Tile 6a', 'Tile 6c', 'Tile 6e',
        'Tile 7a', 'Tile 7e',
    ]),
    S: new Set([
        'Tile 1b', 'Tile 1c', 'Tile 1d',
        'Tile 2a', 'Tile 2e',
        'Tile 3e',
        'Tile 4b', 'Tile 4c', 'Tile 4d',
        'Tile 5a',
        'Tile 6a', 'Tile 6e',
        'Tile 7b', 'Tile 7c', 'Tile 7d',
    ]),
    T: new Set([
        'Tile 1c',
        'Tile 2c',
        'Tile 3c',
        'Tile 4c',
        'Tile 5c',
        'Tile 6c',
        'Tile 7a', 'Tile 7b', 'Tile 7c', 'Tile 7d', 'Tile 7e',
    ]),
    N: new Set([
        'Tile 1a', 'Tile 1e',
        'Tile 2a', 'Tile 2d', 'Tile 2e',
        'Tile 3a', 'Tile 3c', 'Tile 3e',
        'Tile 4a', 'Tile 4c', 'Tile 4e',
        'Tile 5a', 'Tile 5c', 'Tile 5e',
        'Tile 6a', 'Tile 6b', 'Tile 6e',
        'Tile 7a', 'Tile 7e',
    ]),
};
const heroTileLetterSequence = ['E', 'K', 'O', 'W', 'S', 'T', 'O', 'N', 'E', 'S'];

const waitFor = (delayMs) => new Promise((resolve) => {
    window.setTimeout(resolve, delayMs);
});

const getTileColumnKey = (tileId) => {
    const match = tileId.match(/^Tile\s+\d+([a-z])$/i);

    return match ? match[1].toLowerCase() : null;
};

const shuffleTiles = (tiles) => {
    const shuffledTiles = [...tiles];

    for (let index = shuffledTiles.length - 1; index > 0; index -= 1) {
        const randomIndex = Math.floor(Math.random() * (index + 1));
        [shuffledTiles[index], shuffledTiles[randomIndex]] = [shuffledTiles[randomIndex], shuffledTiles[index]];
    }

    return shuffledTiles;
};

const revealTileColumn = (columnTiles) => {
    columnTiles.forEach((tile, index) => {
        const randomOffsetMs = Math.round(Math.random() * heroTileAnimationConfig.tileStaggerSpreadMs);
        const tileDelayMs = index * heroTileAnimationConfig.tileRevealStepMs + randomOffsetMs;

        window.setTimeout(() => {
            tile.classList.add('is-visible');
        }, tileDelayMs);
    });
};

const setTilesForLetter = (tiles, targetTiles) => {
    tiles.forEach((tile) => {
        const tileId = tile.getAttribute('id') ?? '';

        tile.classList.toggle('is-removed', !targetTiles.has(tileId));
        tile.classList.add('is-visible');
    });
};

const removeTilesForLetter = (tiles, keptTiles) => {
    const removableTiles = shuffleTiles(
        tiles.filter((tile) => !keptTiles.has(tile.getAttribute('id') ?? '')),
    );

    removableTiles.forEach((tile) => {
        const removalDelayMs = Math.round(Math.random() * heroTileAnimationConfig.tileRemovalSpreadMs);

        window.setTimeout(() => {
            tile.classList.add('is-removed');
        }, removalDelayMs);
    });
};

const syncTilesForLetter = (tiles, targetTiles) => {
    const tilesToRemove = shuffleTiles(
        tiles.filter((tile) => {
            const tileId = tile.getAttribute('id') ?? '';

            return !targetTiles.has(tileId) && !tile.classList.contains('is-removed');
        }),
    );
    const tilesToAdd = shuffleTiles(
        tiles.filter((tile) => {
            const tileId = tile.getAttribute('id') ?? '';

            return targetTiles.has(tileId) && tile.classList.contains('is-removed');
        }),
    );

    tilesToRemove.forEach((tile) => {
        const removalDelayMs = Math.round(Math.random() * heroTileAnimationConfig.tileRemovalSpreadMs);

        window.setTimeout(() => {
            tile.classList.add('is-removed');
        }, removalDelayMs);
    });

    tilesToAdd.forEach((tile) => {
        const addDelayMs = Math.round(Math.random() * heroTileAnimationConfig.tileAddSpreadMs);

        window.setTimeout(() => {
            tile.classList.remove('is-removed');
            tile.classList.remove('is-visible');

            // Force restart of the entrance animation when a tile returns.
            void tile.getBoundingClientRect();

            tile.classList.add('is-visible');
        }, addDelayMs);
    });
};

const revealFullWall = async (graphic, tilesByColumn) => {
    await waitFor(heroTileAnimationConfig.initialDelayMs);

    graphic.classList.add('is-back-grid-visible');

    heroTileAnimationConfig.columnOrder.forEach((columnKey, columnIndex) => {
        const columnTiles = tilesByColumn[columnKey] ?? [];
        const revealDelayMs =
            heroTileAnimationConfig.gridFadeDurationMs +
            columnIndex * heroTileAnimationConfig.columnDelayMs;

        window.setTimeout(() => {
            revealTileColumn(columnTiles);
        }, revealDelayMs);
    });

    const longestColumnLength = Math.max(
        ...heroTileAnimationConfig.columnOrder.map((columnKey) => (tilesByColumn[columnKey] ?? []).length),
        0,
    );

    const fullWallRevealDurationMs =
        heroTileAnimationConfig.gridFadeDurationMs +
        (heroTileAnimationConfig.columnOrder.length - 1) * heroTileAnimationConfig.columnDelayMs +
        longestColumnLength * heroTileAnimationConfig.tileRevealStepMs +
        heroTileAnimationConfig.tileStaggerSpreadMs +
        heroTileAnimationConfig.tileRevealDurationMs;

    await waitFor(fullWallRevealDurationMs);
};

const transitionFromWallToFirstLetter = async (tiles) => {
    await waitFor(heroTileAnimationConfig.letterHoldMs);

    removeTilesForLetter(tiles, heroTileLetterTargets.E);

    await waitFor(
        heroTileAnimationConfig.tileRemovalSpreadMs +
        heroTileAnimationConfig.letterTransitionDurationMs +
        heroTileAnimationConfig.letterHoldMs,
    );
};

const transitionBetweenLetters = async (tiles, letterKey) => {
    syncTilesForLetter(tiles, heroTileLetterTargets[letterKey]);

    await waitFor(
        Math.max(
            heroTileAnimationConfig.tileRemovalSpreadMs,
            heroTileAnimationConfig.tileAddSpreadMs,
        ) +
        heroTileAnimationConfig.letterTransitionDurationMs +
        heroTileAnimationConfig.letterHoldMs,
    );
};

const transitionToFullWall = async (tiles, allTileIds) => {
    syncTilesForLetter(tiles, allTileIds);

    await waitFor(
        heroTileAnimationConfig.tileAddSpreadMs +
        heroTileAnimationConfig.letterTransitionDurationMs,
    );
};

heroTilesGraphics.forEach((graphic) => {
    const tiles = Array.from(graphic.querySelectorAll('[id^="Tile "]'));

    if (tiles.length === 0) {
        return;
    }

    if (prefersReducedMotion) {
        graphic.classList.add('is-back-grid-visible');
        setTilesForLetter(tiles, heroTileLetterTargets.E);

        return;
    }

    const allTileIds = new Set(
        tiles.map((tile) => tile.getAttribute('id')).filter(Boolean),
    );

    const tilesByColumn = tiles.reduce((columns, tile) => {
        const tileId = tile.getAttribute('id');
        const columnKey = tileId ? getTileColumnKey(tileId) : null;

        if (!columnKey) {
            return columns;
        }

        if (!columns[columnKey]) {
            columns[columnKey] = [];
        }

        columns[columnKey].push(tile);

        return columns;
    }, {});

    const runAnimationLoop = async () => {
        await revealFullWall(graphic, tilesByColumn);

        while (true) {
            await transitionFromWallToFirstLetter(tiles);

            for (const letterKey of heroTileLetterSequence.slice(1)) {
                await transitionBetweenLetters(tiles, letterKey);
            }

            await transitionToFullWall(tiles, allTileIds);
            await waitFor(heroTileAnimationConfig.cyclePauseMs);
        }
    };

    runAnimationLoop();
});
