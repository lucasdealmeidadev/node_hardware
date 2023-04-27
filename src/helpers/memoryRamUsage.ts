import os from 'os';

const { arch, platform, totalmem, freemem } = os;

setInterval(() => {
    const totalMemory = Number(totalmem() / 1024 / 1024);
    const freeMemory = Number(freemem() / 1024 / 1024);
    const usage = (freeMemory / totalMemory) * 100;

    const stats = {
        OS: platform(),
        Arch: arch(),
        TotalRAM: `${totalMemory}MB`,
        FreeRAM: `${freeMemory}MB`,
        Usage: `${usage.toFixed(2)}%`
    };

    console.clear();
    console.table(stats);

    exports.stats = stats;
}, 1000);