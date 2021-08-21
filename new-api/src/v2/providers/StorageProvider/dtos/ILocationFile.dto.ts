import TARGET_FOLDER from '../enums/targetFolder.enum';

export default interface ILocationFileDTO {
  fileName: string;
  targetFolder: TARGET_FOLDER;
  subFolders?: string[];
}
