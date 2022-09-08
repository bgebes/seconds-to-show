/*
 *    @author Berkay Gebeş.
 *    @description It will show mm:ss by given seconds.
 *    @param seconds Required for show.
 */

export default function SecondsToShow(seconds) {
  const minute = parseInt(seconds / 60);
  const remainedSeconds = seconds - minute * 60;

  return `${minute}:${remainedSeconds}`;
}
