import { sequelize } from "@server/database/sequelize";
import { FileOperation, Event, User } from "@server/models";

export default async function fileOperationDeleter(
  fileOp: FileOperation,
  user: User,
  ip: string
) {
  const transaction = await sequelize.transaction();

  try {
    await fileOp.destroy({
      transaction,
    });
    await Event.create(
      {
        name: "fileOperations.delete",
        teamId: user.teamId,
        actorId: user.id,
        // @ts-expect-error dataValues does exist
        data: fileOp.dataValues,
        ip,
      },
      {
        transaction,
      }
    );
    await transaction.commit();
  } catch (error) {
    await transaction.rollback();
    throw error;
  }
}
