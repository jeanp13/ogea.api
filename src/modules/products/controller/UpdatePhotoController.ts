import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { instanceToPlain } from 'class-transformer';
import UpdateUserAvatarService from '../../users/services/UpdateUserAvatarService';

export default class UpdatePhotoController {
  public async update(request: Request, response: Response): Promise<Response> {
    const updateUserAvatar = container.resolve(UpdateUserAvatarService);

    const user = await updateUserAvatar.execute({
      user_id: request.user.id,
      avatarFileName: request.file.filename,
    });

    return response.json({ user: instanceToPlain(user) });
  }
}
