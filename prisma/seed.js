const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
    try {
        const martinFowler = await prisma.author.upsert({
            where: { name: 'Martin Fowler' },
            update: {},
            create: {
                name: 'Martin Fowler',
            },
        });
    } catch(e) {
        console.error(e);
        process.exit(1);
    } finally {
        await prisma.$disconnect();
    }
})();