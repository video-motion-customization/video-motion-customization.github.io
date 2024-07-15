document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    mobileMenu.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    // Function to add hover play/pause functionality to video elements
    function addHoverPlayPause(videoElement) {
        videoElement.addEventListener('mouseover', () => {
            videoElement.play();
        });

        videoElement.addEventListener('mouseout', () => {
            videoElement.pause();
        });
    }

    // Dynamically generate the top row generated videos
    const topRowVideosContainer = document.querySelector('.video-row');
    const generatedVideoPaths = [
        'human_single_generated_video/anime/vid.mp4',
        'human_single_generated_video/man_seaside/vid.mp4',
        'human_single_generated_video/white_man/vid.mp4',
        'human_single_generated_video/young_woman/vid.mp4'
    ];

    generatedVideoPaths.forEach(path => {
        const videoElement = document.createElement('video');
        videoElement.src = path;
        videoElement.controls = true;

        addHoverPlayPause(videoElement);

        topRowVideosContainer.appendChild(videoElement);
    });

    // Add checkboxes for block selection
    const checkboxContainer = document.getElementById('checkbox-container');
    for (let i = 1; i <= 27; i += 2) {
        const checkboxLabel = document.createElement('label');
        checkboxLabel.textContent = `Block ${i}`;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = i;
        checkbox.checked = true;
        checkbox.classList.add('block-checkbox');
        checkboxLabel.appendChild(checkbox);
        checkboxContainer.appendChild(checkboxLabel);
    }

    // Function to generate feature rows
    function generateFeatureRow(blockNumber) {
        const featureRow = document.createElement('div');
        featureRow.classList.add('feature-row');
        featureRow.id = `feature-row-${blockNumber}`;

        const featureTitle = document.createElement('h3');
        featureTitle.textContent = `Block ${blockNumber}`;
        featureRow.appendChild(featureTitle);

        // Self-Attention Maps
        const selfAttentionLabel = document.createElement('h4');
        selfAttentionLabel.textContent = 'Self-Attention maps';
        featureRow.appendChild(selfAttentionLabel);

        const selfAttentionVideos = document.createElement('div');
        selfAttentionVideos.classList.add('feature-videos');

        const pathsSelfAttn = [
            `human_single/anime/spatial_${blockNumber}_self_attn/vid.mp4`,
            `human_single/man_seaside/spatial_${blockNumber}_self_attn/vid.mp4`,
            `human_single/white_man/spatial_${blockNumber}_self_attn/vid.mp4`,
            `human_single/young_woman/spatial_${blockNumber}_self_attn/vid.mp4`
        ];

        pathsSelfAttn.forEach(path => {
            const videoElement = document.createElement('video');
            videoElement.src = path;
            videoElement.controls = true;

            addHoverPlayPause(videoElement);

            selfAttentionVideos.appendChild(videoElement);
        });

        featureRow.appendChild(selfAttentionVideos);

        // Query Features
        const queryValuesLabel = document.createElement('h4');
        queryValuesLabel.textContent = 'Self-Attention Query features';
        featureRow.appendChild(queryValuesLabel);

        const queryValuesVideos = document.createElement('div');
        queryValuesVideos.classList.add('feature-videos');

        const pathsSelfQuery = [
            `human_single/anime/spatial_${blockNumber}_self_q/vid.mp4`,
            `human_single/man_seaside/spatial_${blockNumber}_self_q/vid.mp4`,
            `human_single/white_man/spatial_${blockNumber}_self_q/vid.mp4`,
            `human_single/young_woman/spatial_${blockNumber}_self_q/vid.mp4`
        ];

        pathsSelfQuery.forEach(path => {
            const videoElement = document.createElement('video');
            videoElement.src = path;
            videoElement.controls = true;

            addHoverPlayPause(videoElement);

            queryValuesVideos.appendChild(videoElement);
        });

        featureRow.appendChild(queryValuesVideos);

        // Key Features
        const keyFeaturesLabel = document.createElement('h4');
        keyFeaturesLabel.textContent = 'Self-Attention Key features';
        featureRow.appendChild(keyFeaturesLabel);

        const keyFeaturesVideos = document.createElement('div');
        keyFeaturesVideos.classList.add('feature-videos');

        const pathsSelfKey = [
            `human_single/anime/spatial_${blockNumber}_self_k/vid.mp4`,
            `human_single/man_seaside/spatial_${blockNumber}_self_k/vid.mp4`,
            `human_single/white_man/spatial_${blockNumber}_self_k/vid.mp4`,
            `human_single/young_woman/spatial_${blockNumber}_self_k/vid.mp4`
        ];

        pathsSelfKey.forEach(path => {
            const videoElement = document.createElement('video');
            videoElement.src = path;
            videoElement.controls = true;

            addHoverPlayPause(videoElement);

            keyFeaturesVideos.appendChild(videoElement);
        });

        featureRow.appendChild(keyFeaturesVideos);

        // MLP In Features
        const mlpInFeaturesLabel = document.createElement('h4');
        mlpInFeaturesLabel.textContent = 'Spatial MLP In features';
        featureRow.appendChild(mlpInFeaturesLabel);

        const mlpInFeaturesVideos = document.createElement('div');
        mlpInFeaturesVideos.classList.add('feature-videos');

        const pathsMlpIn = [
            `human_single/anime/spatial_${blockNumber}_mlp_in/vid.mp4`,
            `human_single/man_seaside/spatial_${blockNumber}_mlp_in/vid.mp4`,
            `human_single/white_man/spatial_${blockNumber}_mlp_in/vid.mp4`,
            `human_single/young_woman/spatial_${blockNumber}_mlp_in/vid.mp4`
        ];

        pathsMlpIn.forEach(path => {
            const videoElement = document.createElement('video');
            videoElement.src = path;
            videoElement.controls = true;

            addHoverPlayPause(videoElement);

            mlpInFeaturesVideos.appendChild(videoElement);
        });

        featureRow.appendChild(mlpInFeaturesVideos);

        // MLP Out Features
        const mlpOutFeaturesLabel = document.createElement('h4');
        mlpOutFeaturesLabel.textContent = 'Spatial MLP Out features';
        featureRow.appendChild(mlpOutFeaturesLabel);

        const mlpOutFeaturesVideos = document.createElement('div');
        mlpOutFeaturesVideos.classList.add('feature-videos');

        const pathsMlpOut = [
            `human_single/anime/spatial_${blockNumber}_mlp_out/vid.mp4`,
            `human_single/man_seaside/spatial_${blockNumber}_mlp_out/vid.mp4`,
            `human_single/white_man/spatial_${blockNumber}_mlp_out/vid.mp4`,
            `human_single/young_woman/spatial_${blockNumber}_mlp_out/vid.mp4`
        ];

        pathsMlpOut.forEach(path => {
            const videoElement = document.createElement('video');
            videoElement.src = path;
            videoElement.controls = true;

            addHoverPlayPause(videoElement);

            mlpOutFeaturesVideos.appendChild(videoElement);
        });

        featureRow.appendChild(mlpOutFeaturesVideos);


        // Temporal Attention Query Features
        const tempAttentionQueryLabel = document.createElement('h4');
        tempAttentionQueryLabel.textContent = 'Temporal-Attention Query features';
        featureRow.appendChild(tempAttentionQueryLabel);

        const tempAttentionQueryVideos = document.createElement('div');
        tempAttentionQueryVideos.classList.add('feature-videos');

        const pathsTempAttnQuery = [
            `human_single/anime/temporal_${blockNumber}_temp_q/vid.mp4`,
            `human_single/man_seaside/temporal_${blockNumber}_temp_q/vid.mp4`,
            `human_single/white_man/temporal_${blockNumber}_temp_q/vid.mp4`,
            `human_single/young_woman/temporal_${blockNumber}_temp_q/vid.mp4`
        ];

        pathsTempAttnQuery.forEach(path => {
            const videoElement = document.createElement('video');
            videoElement.src = path;
            videoElement.controls = true;

            addHoverPlayPause(videoElement);

            tempAttentionQueryVideos.appendChild(videoElement);
        });

        featureRow.appendChild(tempAttentionQueryVideos);


        // Temporal Attention Key Features
        const tempAttentionKeyLabel = document.createElement('h4');
        tempAttentionKeyLabel.textContent = 'Temporal-Attention Key features';
        featureRow.appendChild(tempAttentionKeyLabel);

        const tempAttentionKeyVideos = document.createElement('div');
        tempAttentionKeyVideos.classList.add('feature-videos');

        const pathsTempAttnKey = [
            `human_single/anime/temporal_${blockNumber}_temp_k/vid.mp4`,
            `human_single/man_seaside/temporal_${blockNumber}_temp_k/vid.mp4`,
            `human_single/white_man/temporal_${blockNumber}_temp_k/vid.mp4`,
            `human_single/young_woman/temporal_${blockNumber}_temp_k/vid.mp4`
        ];

        pathsTempAttnKey.forEach(path => {
            const videoElement = document.createElement('video');
            videoElement.src = path;
            videoElement.controls = true;

            addHoverPlayPause(videoElement);

            tempAttentionKeyVideos.appendChild(videoElement);
        });

        featureRow.appendChild(tempAttentionKeyVideos);


        // Temporal MLP In Features
        const tempMlpInFeaturesLabel = document.createElement('h4');
        tempMlpInFeaturesLabel.textContent = 'Temoral MLP In features';
        featureRow.appendChild(tempMlpInFeaturesLabel);

        const tempMlpInFeaturesVideos = document.createElement('div');
        tempMlpInFeaturesVideos.classList.add('feature-videos');

        const tempPathsMlpIn = [
            `human_single/anime/temporal_${blockNumber}_mlp_in/vid.mp4`,
            `human_single/man_seaside/temporal_${blockNumber}_mlp_in/vid.mp4`,
            `human_single/white_man/temporal_${blockNumber}_mlp_in/vid.mp4`,
            `human_single/young_woman/temporal_${blockNumber}_mlp_in/vid.mp4`
        ];

        tempPathsMlpIn.forEach(path => {
            const videoElement = document.createElement('video');
            videoElement.src = path;
            videoElement.controls = true;

            addHoverPlayPause(videoElement);

            tempMlpInFeaturesVideos.appendChild(videoElement);
        });

        featureRow.appendChild(tempMlpInFeaturesVideos);

        // Temporal MLP Out Features
        const tempMlpOutFeaturesLabel = document.createElement('h4');
        tempMlpOutFeaturesLabel.textContent = 'Temporal MLP Out features';
        featureRow.appendChild(tempMlpOutFeaturesLabel);

        const tempMlpOutFeaturesVideos = document.createElement('div');
        tempMlpOutFeaturesVideos.classList.add('feature-videos');

        const tempPathsMlpOut = [
            `human_single/anime/temporal_${blockNumber}_mlp_out/vid.mp4`,
            `human_single/man_seaside/temporal_${blockNumber}_mlp_out/vid.mp4`,
            `human_single/white_man/temporal_${blockNumber}_mlp_out/vid.mp4`,
            `human_single/young_woman/temporal_${blockNumber}_mlp_out/vid.mp4`
        ];

        tempPathsMlpOut.forEach(path => {
            const videoElement = document.createElement('video');
            videoElement.src = path;
            videoElement.controls = true;

            addHoverPlayPause(videoElement);

            tempMlpOutFeaturesVideos.appendChild(videoElement);
        });

        featureRow.appendChild(tempMlpOutFeaturesVideos);


        return featureRow;
        
    }

    // Function to update the feature rows based on selected checkboxes
    function updateFeatureRows() {
        const featuresContainer = document.querySelector('.features');
        featuresContainer.innerHTML = '';

        const checkboxes = document.querySelectorAll('.block-checkbox');
        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const blockNumber = checkbox.value;
                const featureRow = generateFeatureRow(blockNumber);
                featuresContainer.appendChild(featureRow);
                
                // Add horizontal line separator between blocks
                const hr = document.createElement('hr');
                hr.classList.add('block-separator');
                featuresContainer.appendChild(hr);
            }
        });
    }

    // Initial generation of feature rows based on selected checkboxes
    updateFeatureRows();

    // Add event listener to checkboxes to update feature rows dynamically
    const checkboxes = document.querySelectorAll('.block-checkbox');
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', updateFeatureRows);
    });

    // Add event listeners for "Check All" and "Uncheck All" buttons
    const checkAllButton = document.getElementById('check-all');
    const uncheckAllButton = document.getElementById('uncheck-all');

    checkAllButton.addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = true;
        });
        updateFeatureRows();
    });

    uncheckAllButton.addEventListener('click', () => {
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
        updateFeatureRows();
    });

    // Add event listener for the Enter key to play all videos
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Enter') {
            const videos = document.querySelectorAll('video');
            videos.forEach(video => {
                video.play();
            });
        }
    });
});
