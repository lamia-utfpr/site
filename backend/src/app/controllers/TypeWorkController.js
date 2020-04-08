import TypeWork from '../models/TypeWork';

class TypeWorkController {
    async store(req, res) {
        const { name, description } = req.body;

        if (description === '')
            return res
                .status(400)
                .json({ error: 'Description cannot be empty :/' });

        const typeWorkExists = await TypeWork.findOne({
            where: { name },
        });

        if (typeWorkExists)
            return res
                .status(400)
                .json({ error: 'Type Work already exists :/' });

        const typeWork = await TypeWork.create({ name, description });

        return res.json({ typeWork });
    }

    async index(req, res) {
        const typeWorks = await TypeWork.findAll();
        return res.json({ typeWorks });
    }

    async update(req, res) {
        const { name, description } = req.body;

        if (description === '')
            return res
                .status(400)
                .json({ error: 'Description cannot be empty :/' });

        const typeWork = await TypeWork.findOne({ where: { name } });

        if (!typeWork)
            return res.status(400).json({ error: 'Type Work not exists :/' });

        await typeWork.update({ name, description });

        return res.json({ typeWork });
    }

    async delete(req, res) {
        const { name } = req.body;

        await TypeWork.destroy({ where: { name } });

        return res.json({ ok: true });
    }
}

export default new TypeWorkController();
