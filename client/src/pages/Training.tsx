/**
 * Design philosophy: Precision in Motion — a focused learning console pairs one cinematic player with a precise, indexed lesson library.
 */

import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronLeft, ChevronRight, ListVideo, Play, Search, X } from "lucide-react";
import { trainingCategories, trainingVideos, type TrainingVideo } from "@/data/trainingVideos";

export default function Training() {
  const [selected, setSelected] = useState(trainingVideos[0]);
  const [playingId, setPlayingId] = useState<string | null>(null);
  const [category, setCategory] = useState<(typeof trainingCategories)[number]>("All");
  const [query, setQuery] = useState("");
  const [playlistOpen, setPlaylistOpen] = useState(false);
  const playerRef = useRef<HTMLElement>(null);
  const selectedIndex = trainingVideos.findIndex((video) => video.id === selected.id);

  useEffect(() => {
    document.body.style.overflow = playlistOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [playlistOpen]);

  const visibleVideos = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return trainingVideos.filter((video) => {
      const matchesCategory = category === "All" || video.category === category;
      const matchesQuery = !normalized || `${video.title} ${video.presenter ?? ""} ${video.description} ${video.learningPoints.join(" ")}`.toLowerCase().includes(normalized);
      return matchesCategory && matchesQuery;
    });
  }, [category, query]);

  const selectVideo = (video: TrainingVideo, returnToPlayer = true) => {
    setSelected(video);
    setPlayingId(video.id);
    setPlaylistOpen(false);
    if (returnToPlayer) {
      window.requestAnimationFrame(() => {
        window.requestAnimationFrame(() => playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }));
      });
    }
  };

  const selectAdjacent = (direction: -1 | 1) => {
    const target = trainingVideos[selectedIndex + direction];
    if (target) selectVideo(target, false);
  };

  const chapterGroups = trainingCategories.slice(1).map((name) => ({
    name,
    videos: visibleVideos.filter((video) => video.category === name),
  })).filter((group) => group.videos.length > 0);

  return (
    <main className="training-page">
      <section className="training-hero">
        <div className="training-hero__copy">
          <p className="eyebrow eyebrow--light">PreXion learning center</p>
          <h1>Learn the workflow.<br /><em>Master every view.</em></h1>
          <p>Official clinical presentations and software tutorials, organized to help your team move from acquisition to confident image review.</p>
        </div>
        <div className="training-hero__signal" aria-hidden="true">
          <span className="training-hero__ticks" />
          <strong>{trainingVideos.length}</strong>
          <small>guided lessons</small>
        </div>
      </section>

      <section className="training-stage" ref={playerRef}>
        <div className="training-player">
          {playingId === selected.id ? (
            <iframe
              key={selected.id}
              src={`https://www.youtube-nocookie.com/embed/${selected.id}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
              title={selected.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ) : (
            <button className="training-player__poster" onClick={() => setPlayingId(selected.id)} aria-label={`Play ${selected.title}`}>
              <span className="training-player__calibration" aria-hidden="true" />
              <span className="training-player__reticle" aria-hidden="true"><i /><i /></span>
              <span className="training-player__label">CLINICAL VIEWING MODULE / {selected.category}</span>
              <span className="training-player__play"><Play size={24} fill="currentColor" /></span>
              <strong>{selected.title}</strong>
              <small>Press play to begin this lesson</small>
            </button>
          )}
        </div>
        <div className="training-now">
          <div className="training-now__index"><span>NOW PLAYING</span><strong>{String(trainingVideos.findIndex((video) => video.id === selected.id) + 1).padStart(2, "0")}</strong></div>
          <p className="eyebrow eyebrow--light">{selected.category}</p>
          <h2>{selected.title}</h2>
          {selected.presenter && <p className="training-now__presenter">Presented by <strong>{selected.presenter}</strong></p>}
          <p className="training-now__description">{selected.description}</p>
          <div className="training-now__points">
            {selected.learningPoints.map((point) => <span key={point}><Check size={14} />{point}</span>)}
          </div>
          <div className="training-now__links">
            <a className="training-youtube-link" href={`https://www.youtube.com/watch?v=${selected.id}`} target="_blank" rel="noreferrer">Open on YouTube <ArrowUpRight size={16} /></a>
          </div>
          <div className="training-transport" aria-label="Video navigation">
            <button onClick={() => selectAdjacent(-1)} disabled={selectedIndex === 0}><ChevronLeft size={17} /><span>Previous</span></button>
            <button className="training-transport__list" onClick={() => setPlaylistOpen(true)}><ListVideo size={18} /><span>View lessons</span></button>
            <button onClick={() => selectAdjacent(1)} disabled={selectedIndex === trainingVideos.length - 1}><span>Next</span><ChevronRight size={17} /></button>
          </div>

          <div className="training-inline-playlist" aria-label="Training playlist">
            <div className="training-inline-playlist__heading"><span>Playlist</span><small>{String(selectedIndex + 1).padStart(2, "0")} / {trainingVideos.length}</small></div>
            <div className="training-inline-playlist__scroll">
              {trainingVideos.map((video, index) => (
                <button key={video.id} className={video.id === selected.id ? "training-queue-item training-queue-item--active" : "training-queue-item"} onClick={() => selectVideo(video, false)}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{video.title}</strong><small>{video.category}</small></div>
                  <Play size={13} fill="currentColor" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {playlistOpen && (
        <div className="training-playlist-overlay" role="dialog" aria-modal="true" aria-label="Choose a training lesson">
          <button className="training-playlist-overlay__backdrop" onClick={() => setPlaylistOpen(false)} aria-label="Close lesson list" />
          <section className="training-playlist-sheet">
            <header><div><p className="eyebrow">Training playlist</p><h2>Choose a lesson</h2></div><button onClick={() => setPlaylistOpen(false)} aria-label="Close lesson list"><X size={22} /></button></header>
            <div className="training-playlist-sheet__progress"><span style={{ width: `${((selectedIndex + 1) / trainingVideos.length) * 100}%` }} /></div>
            <div className="training-playlist-sheet__list">
              {trainingVideos.map((video, index) => (
                <button key={video.id} className={video.id === selected.id ? "training-sheet-item training-sheet-item--active" : "training-sheet-item"} onClick={() => selectVideo(video, false)}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><strong>{video.title}</strong><small>{video.category}</small></div>
                  <Play size={14} fill="currentColor" />
                </button>
              ))}
            </div>
          </section>
        </div>
      )}

      <section className="training-library section-light">
        <div className="training-library__heading">
          <div><p className="eyebrow">Complete video library</p><h2>Choose the next<br />level of control.</h2></div>
          <p>Build fluency from clinical context through acquisition, reconstruction, planning and review. Every chapter leads to a more confident imaging workflow.</p>
        </div>

        <div className="training-toolbar">
          <div className="training-filters" role="group" aria-label="Filter training videos">
            {trainingCategories.map((item) => (
              <button key={item} className={category === item ? "training-filter training-filter--active" : "training-filter"} onClick={() => setCategory(item)}>{item}</button>
            ))}
          </div>
          <label className="training-search"><Search size={17} /><span className="sr-only">Search training videos</span><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search a function" /></label>
        </div>

        <div className="training-chapters">
          {chapterGroups.map((group) => {
            const chapterIndex = trainingCategories.indexOf(group.name);
            return (
              <section className="training-chapter" key={group.name}>
                <header className="training-chapter__heading">
                  <span>{String(chapterIndex).padStart(2, "0")}</span>
                  <div><p className="eyebrow">Learning chapter</p><h3>{group.name}</h3></div>
                  <small>{String(group.videos.length).padStart(2, "0")} lessons</small>
                </header>
                <div className="training-grid">
                  {group.videos.map((video) => {
                    const index = trainingVideos.findIndex((item) => item.id === video.id) + 1;
                    const isSelected = video.id === selected.id;
                    return (
                      <button key={video.id} className={isSelected ? "training-card training-card--active" : "training-card"} onClick={() => selectVideo(video)} aria-label={`Play ${video.title}`}>
                        <div className="training-card__top"><span>{String(index).padStart(2, "0")}</span><small>PX / LESSON</small><i><Play size={15} fill="currentColor" /></i></div>
                        <div><h3>{video.title}</h3>{video.presenter && <p>{video.presenter}</p>}</div>
                        <p className="training-card__summary">{video.description}</p>
                      </button>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {visibleVideos.length === 0 && <div className="training-empty"><p className="eyebrow">No matching lesson</p><h3>Try another term or category.</h3><button onClick={() => { setCategory("All"); setQuery(""); }}>Clear filters</button></div>}
      </section>
    </main>
  );
}
