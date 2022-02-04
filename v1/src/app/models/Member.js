import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

const PROTECTED_ATTRIBUTES = ['password', 'password_hash'];

class Member extends Model {
  toJSON() {
    // hide protected fields
    const attributes = { ...this.get() };
    // eslint-disable-next-line no-restricted-syntax
    for (const a of PROTECTED_ATTRIBUTES) {
      delete attributes[a];
    }
    return attributes;
  }

  static init(sequelize) {
    super.init(
      {
        name: {
          type: Sequelize.STRING,
          allowNull: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        login: {
          type: Sequelize.STRING,
          allowNull: false,
          unique: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        password_hash: Sequelize.STRING,
        password: {
          type: Sequelize.VIRTUAL,
          allowNull: false,
          unique: false,
          validate: {
            notNull: true,
            notEmpty: true,
          },
        },
        linkedin: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          validate: {
            notNull: false,
            notEmpty: false,
          },
        },
        gitHub: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          validate: {
            notNull: false,
            notEmpty: false,
          },
        },
        lattes: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          validate: {
            notNull: false,
            notEmpty: false,
          },
        },
        description: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          validate: {
            notNull: false,
            notEmpty: false,
          },
        },
        quoteName: {
          type: Sequelize.STRING,
          allowNull: true,
          unique: false,
          validate: {
            notNull: false,
            notEmpty: false,
          },
        },
      },
      {
        sequelize,
        scopes: {
          withoutPassword: {
            attributes: { exclude: ['password', 'password_hash'] },
          },
        },
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Picture, {
      foreignKey: 'avatar_id',
      as: 'avatar',
    });
    this.belongsTo(models.TypeMember, {
      foreignKey: 'office_id',
      as: 'office',
    });

    this.hasMany(models.MemberWork, {
      foreignKey: 'member_id',
      as: 'works',
    });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Member;
