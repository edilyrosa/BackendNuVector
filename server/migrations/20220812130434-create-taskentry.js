"use strict";
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("taskentries", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      ClientId: {
        type: Sequelize.INTEGER, //LA ESTOY CREANDO A MANO
      },

      ProjectId: {
        type: Sequelize.INTEGER, //LA ESTOY CREANDO A MANO
      },

      ContractorId: {
        type: Sequelize.INTEGER, //LA ESTOY CREANDO A MANO
      },

      ProductId: {
        type: Sequelize.INTEGER, //LA ESTOY CREANDO A MANO
      },

      ActivityId: {
        type: Sequelize.INTEGER, //LA ESTOY CREANDO A MANO
      },

      CategoryId: {
        type: Sequelize.INTEGER, //LA ESTOY CREANDO A MANO
      },

      contractor_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Contractors",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      date: {
        type: Sequelize.DATEONLY,
      },
      duration: {
        type: Sequelize.DECIMAL,
      },
      billable: {
        type: Sequelize.BOOLEAN,
      },
      project_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Projects",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      client_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Clients",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      product_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Products",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      activity_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Activities",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      category_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      },
      description: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("taskentries");
  },
};
