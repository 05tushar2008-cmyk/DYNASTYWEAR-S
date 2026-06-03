document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.getElementById("hero-canvas");
    const context = canvas.getContext("2d");
    
    // We have 96 frames in total, starting from 001 to 096.
    // 011 is a jpg, others are pngs.
    const frameCount = 96;
    const currentFrame = index => {
        let padded = (index + 1).toString().padStart(3, '0');
        let ext = padded === '011' ? 'jpg' : 'png';
        return `assets/sequence/${padded}.${ext}`;
    };

    // Preload images
    const images = [];
    const imagePromises = [];
    let imagesLoaded = 0;

    for (let i = 0; i < frameCount; i++) {
        const img = new Image();
        const promise = new Promise((resolve) => {
            img.onload = () => {
                imagesLoaded++;
                resolve(img);
            };
            img.onerror = () => {
                console.error(`Failed to load image at index ${i}`);
                resolve(img); // resolve anyway to continue
            };
        });
        img.src = currentFrame(i);
        images.push(img);
        imagePromises.push(promise);
    }

    // Adjust canvas size
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        // Re-render the current frame if images are loaded
        if (imagesLoaded > 0) {
            renderFrame(Math.floor(currentFrameIndex));
        }
    };
    
    window.addEventListener("resize", resizeCanvas);

    // Render logic
    const renderFrame = (index) => {
        if (!images[index] || !images[index].complete || images[index].naturalWidth === 0) return;
        
        // Calculate crop to cover the whole canvas (like object-fit: cover)
        const imgRatio = images[index].width / images[index].height;
        const canvasRatio = canvas.width / canvas.height;
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (imgRatio > canvasRatio) {
            drawWidth = canvas.height * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
        } else {
            drawHeight = canvas.width / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
        }

        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(images[index], offsetX, offsetY, drawWidth, drawHeight);
    };

    let currentFrameIndex = 0;
    
    // When the first image loads or all load, start
    Promise.all(imagePromises).then(() => {
        resizeCanvas();
        canvas.style.opacity = 1; // Fade in canvas
        
        // Initial render
        requestAnimationFrame(() => renderFrame(0));
    });

    // Scroll Logic
    const container = document.querySelector(".hero-sequence-container");

    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY;
        // The container starts at the top, so we can just use scrollTop
        const maxScroll = container.scrollHeight - window.innerHeight;
        const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScroll));
        
        // Map fraction to frames
        const frameIndex = Math.min(
            frameCount - 1,
            Math.floor(scrollFraction * frameCount)
        );

        if (frameIndex !== currentFrameIndex) {
            currentFrameIndex = frameIndex;
            requestAnimationFrame(() => renderFrame(frameIndex));
        }
        
        // Parallax effect on hero content
        const heroContent = document.querySelector('.hero-content');
        if (scrollTop < window.innerHeight) {
            heroContent.style.transform = `translate(-50%, calc(-50% + ${scrollTop * 0.4}px))`;
            heroContent.style.opacity = 1 - (scrollTop / (window.innerHeight * 0.8));
        }
    });

    // Add Navbar transition on scroll
    const navbar = document.querySelector('.navbar');
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(5, 5, 5, 0.9)';
            navbar.style.padding = '1rem 4rem';
        } else {
            navbar.style.background = 'rgba(5, 5, 5, 0.6)';
            navbar.style.padding = '1.5rem 4rem';
        }
    });

    // Subtle parallax/reveal effect for Tailwind sections
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
                entry.target.classList.remove('translate-y-10', 'opacity-0');
            }
        });
    }, observerOptions);

    // Only apply to the new Tailwind sections, not our canvas hero
    document.querySelectorAll('section.py-section-gap, section.py-32').forEach(section => {
        section.classList.add('transition-all', 'duration-1000', 'translate-y-10', 'opacity-0');
        section.classList.remove('opacity-100'); // reset it so observer can reveal it
        observer.observe(section);
    });
});
