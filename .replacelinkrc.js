module.exports = {
  /** 源替换后协议 */
  protocol: "http",
  /** 源替换后域名 */
  hostname: "127.0.0.1",
  /** 源替换后端口 */
  port: "8087",
  /** 源文件已下载存放位置 */
  downloadDir: "./src/public/downloadAssets",
  /** 需要替换源链接的文件夹 */
  sourceDir: "./src",
  /** 源替换后输出的文件夹 */
  replacedDir: "./src",
  /** 生成映射文件 */
  mappingFile: true,
  linkType: "relative",
};
