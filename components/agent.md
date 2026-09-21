This directory contains all reusable interactive UI sections: navigation, hero ecosystem, service hub, workflow, leadership, contact form, and footer. Components consume typed content from data/ and shared helpers from lib/.

`InteractiveReel.tsx` is the Hero's client-side capability reel. It owns the three auto-advancing capability slides, progress tabs, pause/play and previous/next controls, and the dark responsive card styling. Keep slide content in the local `capabilities` array and preserve its `AnimatePresence` transition when changing the visual treatment.
