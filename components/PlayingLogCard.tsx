import { PlayingLog } from '../interfaces/PlayingLog';

import GenreBadge from './GenreBadge';

type Props = {
  playingLog: PlayingLog;
}

const PlayingLogCard: React.FC<Props> = ({ playingLog }: Props) => {
  const summaryText = () => {
    return playingLog.impressionOfInteresting
      || playingLog.reflectionForNext
      || playingLog.otherPartInpression
      || playingLog.impressionOfDifficulty;
  };

  return (
    <>
      <a href={`playing-logs${playingLog.id}`} className="text-start">
        <div className="card">
          <div className="card-header pt-1 px-3">
            <div className="text-muted small text-center mb-0">{playingLog.playstyle.name}</div>
            {playingLog.tune.genres.map(genre => <GenreBadge genreName={genre.name}></GenreBadge>)}
            <h6>{ playingLog.tune.title }</h6>
            <h6 className="text-muted mb-0">
              { playingLog.tune.composer.displayName }作曲{ playingLog.arranger }{ playingLog.edition }
            </h6>
          </div>
          <div className="card-body py-2 px-3">
            <p className="card-text mb-1 yrl-playing-log-nickname">{ playingLog.user.nickname }さんの{ playingLog.playDate }演奏</p>
            <pre className="text-muted mb-0 yrl-pre-wrap yrl-truncate-three-line">{summaryText()}</pre>
            <span className="badge bg-secondary text-dark">{ playingLog.playerLevel }</span>
            <span className="badge bg-secondary text-dark">{ playingLog.instrument.shortName } { playingLog.position }</span>
          </div>
          <footer>
            <div className="row no-gutters text-center">
              <div className="col-4">
                <div>面白さ</div>
                <div>{ playingLog.interesting || '-' }</div>
              </div>
              <div className="col-4">
                <div>体力</div>
                <div>{ playingLog.physicality || '-' }</div>
              </div>
              <div className="col-4">
                <div>難易度</div>
                <div>{ playingLog.difficulty || '-' }</div>
              </div>
            </div>
          </footer>
        </div>
      </a>
    </>
  );
};

export default PlayingLogCard;
