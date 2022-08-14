const { Project, Client } = require("../models");

export const getProjects = async (req, res) => {
  try {
    const { client, name } = req.query;
    const query = (FindManyOptions.Project["where"] = []);

    console.log(name);
    if (client) {
      query.push({ client: { id: client } });
    }
    if (name) {
      query.push({ name: ILike(`%${name}%`) });
    }

    const options = (FindManyOptions.Project = {});

    if (query.length > 0) {
      options.where = query;
    }

    const projects = await Project.find(options);
    (await Project.save) <
      Project >
      {
        ...req.body,
        products: [{ id: 1 }],
      };
    (await Project.save) <
      Project >
      {
        ...req.body,
        products: [...req.body.products, { id: 24 }],
      };

    (await Project.save) <
      Project >
      {
        ...req.body,
        products: req.body.products.filter((product) => product.id !== 30),
      };
    return response.success(res, { body: projects });
  } catch (error) {
    if (error instanceof Error) {
      response.error(res, { error: error.message });
    }
  }
};
