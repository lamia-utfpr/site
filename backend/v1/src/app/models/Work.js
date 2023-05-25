import Sequelize, { Model } from 'sequelize';
import { format } from 'date-fns';

class Work extends Model {
  static init(sequelize) {
    super.init(
      {
        title: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        objective: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        abstract: {
          type: Sequelize.TEXT,
          allowNull: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        abstractCard: {
          type: Sequelize.VIRTUAL,
          get() {
            if (!this.abstract) {
              return null;
            }

            if (this.abstract.length <= 300) {
              return this.abstract;
            }
            return `${this.abstract.substr(0, 300)}...`;
          },
        },
        git_hub: {
          type: Sequelize.STRING,
          allowNull: true,
          validate: {
            notEmpty: false,
          },
        },
        urlGithub: {
          type: Sequelize.VIRTUAL,
          get() {
            return this.git_hub ? `https://github.com/${this.git_hub}` : null;
          },
        },
        date_begin: {
          type: Sequelize.DATE,
          allowNull: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        dateBegin: {
          type: Sequelize.VIRTUAL,
          get() {
            const dateFormated = format(this.date_begin, 'dd/MM/yyyy');
            return dateFormated;
          },
        },
        date_end: {
          type: Sequelize.STRING,
          allowNull: true,
          validate: {
            notEmpty: false,
          },
        },
        status: {
          type: Sequelize.VIRTUAL,
          get() {
            return this.data_end ? 'Finalizado' : 'Desenvolvendo';
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Partner, {
      foreignKey: 'partner_id',
      as: 'partner',
    });

    this.belongsToMany(models.CategoryWork, {
      foreignKey: 'work_id',
      as: 'categories',
      through: 'categoryWorks_works',
    });

    this.belongsToMany(models.TypeWork, {
      foreignKey: 'work_id',
      as: 'types',
      through: 'typeWorks_works',
    });
    this.belongsToMany(models.AreaExpertise, {
      foreignKey: 'work_id',
      as: 'areaExpertise',
      through: 'areaExpertise_works',
    });

    this.belongsToMany(models.Picture, {
      foreignKey: 'work_id',
      as: 'pictures',
      through: 'pictures_works',
    });

    this.hasMany(models.MemberWork, {
      foreignKey: 'work_id',
      as: 'worksMember',
    });
  }
}

export default Work;
