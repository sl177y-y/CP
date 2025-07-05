// pages/index.js
import Head from 'next/head';
import React, { useState } from 'react';

const Glossary = () => {
  const allTerms = [
        { term: "Active learning in Machine Learning", definition: "Active learning is a concept in machine learning that involves selecting the most informative data points for labeling to train a model efficiently. In traditional supervised learning, a model is trained on a large labeled dataset to learn the underlying patterns and relationships. However, obtaining labeled data can be a time-consuming and costly process." },
      
        { term: "Auto Labeling", definition: "Auto labeling, also known as automated labeling or automated data labeling, is the process of assigning labels or annotations to data automatically using machine learning techniques. It involves training machine learning models to recognize patterns and make accurate predictions on unlabeled data, thereby reducing the need for manual labeling by humans." },
      
        { term: "BERT", definition: "BERT, or Bidirectional Encoder Representations from Transformers, is a powerful NLP model that has revolutionized the field of natural language processing. BERT is built upon the Transformer architecture, which is a neural network architecture designed to process sequential data such as natural language text." },
      
        { term: "CI/CD for Machine Learning", definition: "CI/CD (Continuous Integration and Continuous Delivery) is a set of software engineering practices that enable teams to deliver code changes to production rapidly and reliably. In the context of machine learning, CI/CD for ML is a set of principles and methods for continuously integrating and delivering code changes to production." },
      
        { term: "COCO Dataset", definition: "In the intricate tapestry of computer vision and AI, the role of datasets is not just fundamental, but transformative. Take, for instance, the COCO dataset, a name that resonates deeply within the community. Born out of the necessity to conquer the complexities of object recognition and segmentation, COCO has etched itself as a cornerstone." },
      
        { term: "Computer Vision", definition: "Computer vision is an interdisciplinary field that focuses on enabling computers to interpret and understand visual data from the world around them. The primary goal of computer vision is to create algorithms and tools that enable computers to extract meaningful information from images, videos, and other types of visual data." },
      
        { term: "Convolutional Neural Network", definition: "A Convolutional Neural Network (CNN) is a specialized type of artificial neural network that is primarily designed for processing and analyzing structured grid-like data, such as images and videos. CNNs have revolutionized the field of computer vision and are widely used for tasks such as image classification, object detection." },
      
        { term: "Cross Validation", definition: "Cross validation is a statistical method used in machine learning to assess the performance of a predictive model on an independent data set. It is a technique that helps to ensure the model’s effectiveness and accuracy by testing its ability to generalize to an independent data set." },

        { term: "DVC", definition: "Data Version Control (DVC) is a version control system designed for machine learning (ML) projects. It provides data versioning tools that help manage and track changes to ML models and datasets, making it easy to reproduce results and collaborate with others. DVC is based on Git, which is a popular version control system." },

        { term: "Data Registry", definition: "A data registry, also known as a data catalog or data inventory, is a centralized system or repository that stores and organizes metadata about various data assets within an organization. It serves as a comprehensive inventory of data sources, datasets, and data-related artifacts, providing a holistic view of an organization’s data." },
      
        { term: "Data Versioning", definition: "Data versioning is the practice of keeping track of changes made to a dataset over time. This means that each version of the dataset is saved and can be accessed at any time, even after subsequent changes have been made. Data versioning is commonly used in industries that require the management of data changes over time." },
      
        { term: "Data-Centric AI", definition: "Data-Centric AI (Artificial Intelligence) is an approach to AI that focuses on the data as the main driver of the machine learning (ML) process. In this approach, data is at the center of the AI pipeline, and all decisions and actions revolve around it. This means that data is not only a fuel for AI but also the primary consideration in the development and deployment of AI models." },
      
        { term: "Decision Trees in Machine Learning", definition: "A Decision Tree is a supervised machine-learning algorithm predominantly used for classification problems. It is a tree-structured model of decisions where each node represents a feature(attribute), each link(branch) means a decision rule, and each leaf represents an outcome(categorical or continuous value). The topmost node in a Decision Tree is known as the root node." },
      
        { term: "Elo Rating System", definition: "The Elo Rating System is a method primarily devised for two-player games such as chess to calculate the relative skill levels of players. Conceived by Arpad Elo, this system assigns a numeric rating representing a player’s skill level. Beyond its traditional board game application, Elo’s principles have been extrapolated to evaluate and rank models, especially in the context of sports and competitive activities." },
      
        { term: "Epoch in Machine Learning", definition: "Epoch is a fundamental concept in machine learning, particularly in the field of deep learning, which refers to a single iteration or pass over the entire training dataset during the training phase of a machine learning model. In simpler terms, an epoch represents one complete cycle of the model through the entire training dataset." },
      
        { term: "Experiment Tracking", definition: "Experiment tracking is a crucial aspect of machine learning (ML) and data science workflows. It involves systematically recording and organizing information about experiments conducted during model development, including hyperparameters, datasets, code versions, and results. Experiment tracking enables reproducibility, collaboration, and efficient management of ML experiments." },
      
        { term: "F1 Score", definition: "In the realm of classification problems, the F1 Score emerges as a crucial metric to evaluate binary classification models, especially when data is imbalanced. Let’s delve deeper into understanding what it signifies and why it’s pivotal in the world of machine learning. What is the F1 Score? The F1 Score is a harmonic mean of precision and recall, providing a balanced measure of a model’s performance." },
      
        { term: "Feature Store", definition: "A feature store is a crucial component in the field of machine learning that serves as a repository for storing, managing, and serving machine learning features. It is designed to handle the entire lifecycle of features, from their creation and storage to their retrieval for model training and prediction purposes. The feature store ensures consistency and accessibility of features across the ML pipeline." },
      
        { term: "GPU", definition: "Graphical Processing Unit (GPU) A Graphical Processing Unit (GPU), also known as a Graphics Processing Unit, is a specialized electronic circuit designed to rapidly manipulate and render images, animations, and videos. Originally developed for accelerating graphics rendering in computer games, GPUs have evolved into powerful parallel processing units capable of handling complex computations. In this context, GPUs are widely used in machine learning and deep learning tasks." },
      
        { term: "Generative AI", definition: "Generative AI, or generative artificial intelligence, refers to a type of AI system that can create new and original content such as images, videos, music, and text. Unlike other types of AI systems that are designed to recognize patterns in existing data, generative AI models are trained on large datasets and can generate novel outputs that exhibit creativity and diversity." },
      
        { term: "Generative Adversarial Network", definition: "In the dynamic landscape of artificial intelligence and machine learning, few innovations have captivated the imagination of researchers and practitioners quite like Generative Adversarial Networks (GANs). Conceived by Ian Goodfellow and his collaborators in 2014, GANs have emerged as a cornerstone in the domain of generative modeling, revolutionizing the synthesis of realistic data samples that closely mimic authentic data." },
      
        { term: "Holdout Set", definition: "In the realm of machine learning and data science, a holdout set, also known as a holdout data or holdout validation set, is a subset of data that is intentionally withheld from the model during the training process. It is used to evaluate the performance and generalization ability of the trained model on unseen data." },

        { term: "Human in the Loop Machine Learning", definition: "At the core of Human-Guided Machine Learning (HGML) is a harmonious fusion where human sagacity and machine operational efficacy converge. This approach acknowledges that machines, despite their adeptness at processing vast data, often lack the finesse to fully comprehend the nuanced and contextual layers that the human brings to the learning process." },
      
        { term: "Hyperparameter Tuning", definition: "Hyperparameter tuning is the process of selecting the best hyperparameters for a machine learning model. Hyperparameters are parameters that are not learned by the model during training, but rather are set by the data scientist or machine learning engineer prior to training. Examples of hyperparameters include learning rate, batch size, and regularization strength." },
      
        { term: "Internal Covariate Shift", definition: "Internal Covariate Shift refers to the phenomenon where the distribution of input values to a learning algorithm changes as the network’s parameters are updated during training. In other words, it occurs when the distribution of the input data to each layer of a neural network changes as the parameters of the network are updated." },
      
        { term: "JAX", definition: "JAX is an open-source numerical computing library that extends the capabilities of NumPy by enabling automatic differentiation. Born from the need to address modern machine learning problems, JAX provides the tools for high-performance machine learning research, especially in areas requiring gradients like optimization problems." },
      
        { term: "Kullback-Leibler (KL) Divergence", definition: "Kullback-Leibler (KL) divergence, also known as relative entropy, is a measure of how one probability distribution diverges from a second expected probability distribution. Originating from information theory, KL divergence quantifies the difference between two probability distributions in terms of the number of extra bits required to code samples from one distribution using a code optimized for the other distribution." },
      
        { term: "Label Studio", definition: "Label Studio is an open-source data labeling and annotation tool developed by Heartex. It is designed to simplify the process of creating high-quality training data sets for machine learning models. Label Studio supports a wide range of annotation types, including text, image, video, and audio." },
      
        { term: "Learning Rate", definition: "In the intricate tapestry of machine learning, a quintessential component emerges as the ‘learning rate.’ This element transcends mere conceptualization; it forms the crux of the evolutionary learning process in machine learning models. Envision the learning rate as an enigmatic hyperparameter, a sort of arcane regulator, fine-tuning the extent to which the model's parameters are updated in each iteration of the optimization process." },
      
        { term: "Linear Regression", definition: "Linear regression is a statistical modeling technique used to analyze the relationship between a dependent variable and one or more independent variables. It is a fundamental and widely used algorithm in machine learning and statistical analysis. Linear regression aims to find the best-fitting linear relationship between the variables, allowing for prediction and inference." },
      
        { term: "Low-Rank Adaptation (LoRA)", definition: "LoRA is a technique used to reduce the computational complexity of neural networks (NNs) during deployment on resource-constrained devices, such as smartphones, smart home devices, and embedded systems. LoRA adapts the weight matrices of a NN to have a low-rank structure, which reduces the number of computations required during forward propagation, resulting in faster execution and lower memory requirements." },

        { term: "ML Model Deployment", definition: "Delving into the realm of Machine Learning, the deployment of an ML Model is a critical juncture. It’s not merely about crafting a model but ushering it into the operational world where it interacts with other software systems, offering insightful predictions. Picture this as the crescendo in a machine learning project, where the model transitions from development to real-world usage." },

        { term: "MLOps", definition: "MLOps, short for Machine Learning Operations, is an emerging practice that combines machine learning (ML) with DevOps principles to effectively manage and operationalize ML workflows. It focuses on streamlining the development, deployment, and maintenance of ML models in production environments. MLOps aims to bridge the gap between data science teams, responsible for creating ML models, and IT/operations teams, responsible for deploying and managing these models in a scalable and efficient manner." },
      
        { term: "MLOps Monitoring", definition: "MLOps Monitoring refers to the practice of monitoring machine learning (ML) operations (MLOps) in order to ensure the performance, reliability, and compliance of ML models in production environments. It involves continuously monitoring various aspects of ML models, including data quality, model performance, and system behavior. MLOps monitoring provides valuable insights into the health and effectiveness of deployed ML models." },
      
        { term: "MLOps Platform", definition: "MLOps (Machine Learning Operations) has emerged as a critical discipline in the field of data science and machine learning. It focuses on the efficient and reliable deployment, monitoring, and management of machine learning models in production environments. To facilitate the MLOps process, organizations often rely on MLOps platforms, which provide a comprehensive set of tools and features to streamline the end-to-end ML lifecycle." },
      
        { term: "MLflow", definition: "MLflow is an open-source platform designed to simplify the machine learning lifecycle. It provides a comprehensive set of tools and frameworks to manage and track the end-to-end ML development process, including experimentation, reproducibility, deployment, and collaboration. MLflow enables data scientists and ML engineers to focus on building and deploying models while maintaining a structured and scalable workflow." },
      
        { term: "Machine Learning Reproducibility", definition: "Machine Learning (ML) reproducibility refers to the ability to obtain consistent and reliable results when running ML experiments or workflows. It involves ensuring that the results obtained from a particular ML model or experiment can be replicated by others using the same data, code, and computational resources. Reproducibility is a fundamental aspect of scientific research and is crucial for building trust in ML models and findings." },
      
        { term: "Mean Absolute Error (MAE)", definition: "Mean Absolute Error (MAE) is a commonly used metric in machine learning and statistics to measure the average magnitude of errors between predicted and actual values. It provides a straightforward and intuitive measure of the model’s accuracy and is particularly useful when dealing with continuous numerical data." },
      
        { term: "Mean Square Error (MSE)", definition: "Mean Squared Error (MSE) is a commonly used statistical metric that measures the average squared difference between the predicted values and the actual values in a dataset. It is widely employed in various domains, including statistics, machine learning, and data analysis. MSE provides a quantitative measure of the accuracy of a predictive model." },
      
        { term: "Model Accuracy", definition: "Model accuracy in machine learning refers to the degree to which the predictions made by a machine learning model align with the actual outcomes. It is a key metric used to evaluate the performance of a model, particularly in supervised learning scenarios where the true outcomes are known. Model accuracy is calculated as the ratio of correctly predicted instances to the total instances in the dataset." },
      
        { term: "Model Fairness", definition: "Model fairness is a crucial aspect of machine learning and artificial intelligence (AI) that focuses on ensuring equitable and unbiased outcomes in predictive models. With the increasing adoption of AI technologies across various domains, it is essential to address the potential biases and discrimination that can arise from machine learning models. Model fairness aims to identify and mitigate these biases to ensure fair and ethical use of AI." },
      
        { term: "Model Registry", definition: "A model registry is a central repository that stores and manages machine learning models and their associated metadata throughout their lifecycle. It serves as a catalog and control center for organizing, versioning, and tracking ML models, enabling efficient collaboration, reproducibility, and governance within the machine learning operations (MLOps) workflow." },
      
        { term: "Model Serving", definition: "Model serving, an often overlooked yet pivotal aspect in the realm of machine learning, plays an indispensable role in bringing trained models into real-world application. It’s the process where a model, having been rigorously trained, steps out of its theoretical bounds and into a live environment, making predictions from fresh input data. Picture model serving as the conduit through which the fruits of machine learning labor transform into actionable insights in various applications." },
      
        { term: "Neural Architecture Search", definition: "At the heart of machine learning innovation lies Neural Architecture Search (NAS), a specialized branch dedicated to the automated crafting of artificial neural networks. This field revolutionizes the traditional, labor-intensive method of manually constructing neural network frameworks. NAS employs advanced machine learning strategies to streamline this process, leading to the automatic discovery of optimal neural network architectures for specific tasks." },
      
        { term: "NumPy", definition: "NumPy, short for Numerical Python, is the cornerstone of numerical computing in Python. Offering an array object called ndarray, it provides a set of fast mathematical operations that can be performed on arrays. NumPy’s simplicity and efficiency have cemented its position as the fundamental package for scientific computing with Python." },
      
        { term: "Object Detection", definition: "Delving into the realm of computer vision, object detection stands out as an intricate yet enthralling field, having undergone remarkable progress in the wake of the machine learning and AI revolution. It encompasses a computer system’s capability to discern and pinpoint objects within imagery or video sequences. This innovation finds its utility in a spectrum of applications, from surveillance and autonomous vehicles to image recognition and augmented reality." },
      
        { term: "One-hot Encoding", definition: "One-hot encoding is a process used in machine learning and data science to convert categorical data into a format that can be provided to machine learning algorithms to improve predictions. While machines understand numbers, they do not comprehend categories or labels in the raw form. One-hot encoding is a technique that transforms these categories into a binary matrix representation, making it easier for machine learning models to interpret and process categorical data." },
      
        { term: "Optuna", definition: "In the world of machine learning and deep learning, the right set of hyperparameters can make the difference between an average model and a state-of-the-art one. Optuna, a hyperparameter optimization framework, has rapidly gained popularity by making the task of finding these optimal hyperparameters efficient and user-friendly. Optuna is an open-source Python library that provides tools for hyperparameter optimization, enabling data scientists and machine learning practitioners to efficiently search for the best set of hyperparameters for their models." },
      
        { term: "Parameter Efficient Fine Tuning (PEFT)", definition: "PEFT stands for Parameter Efficient Fine-Tuning, which is a technique used in deep learning to fine-tune pre-trained language models (PLMs) for downstream natural language processing tasks. The main goal of PEFT is to improve the performance of PLMs on specific tasks while reducing the number of task-specific parameters and computation required for fine-tuning. Traditional fine-tuning approaches may introduce a large number of parameters, leading to increased computational requirements and memory usage. PEFT addresses this challenge by optimizing the task-specific parameters to be more efficient while maintaining or improving overall performance." },
      
        { term: "Precision", definition: "Precision is a foundational term in the realm of machine learning and statistics, especially within classification tasks. When you’re evaluating a model’s performance, particularly in situations where false positives carry significant implications, precision becomes a vital metric. Precision is defined as the ratio of true positive predictions to the total predicted positives, providing insights into the model’s ability to avoid false positives. It is often considered in conjunction with other metrics such as recall and F1 score to comprehensively assess a model’s performance." },
      
        { term: "PyTorch", definition: "PyTorch is an open-source machine learning library that is widely used for developing and training deep learning models. It is based on the Torch library, which is a scientific computing framework with a focus on machine learning algorithms. PyTorch provides a flexible and intuitive interface that enables researchers and developers to build and experiment with complex neural network architectures. It is known for its dynamic computational graph, which allows for more flexible model building and experimentation compared to static graph frameworks. PyTorch has gained popularity in both research and industry, and its ecosystem includes a rich set of tools and libraries for various machine learning tasks." },

        { term: "Quantized Low-Rank Adaptation (QLoRA)", definition: "QLoRA is a technique used to reduce the precision of neural network weights and activations while preserving accuracy. QLoRA combines the concepts of low-rank adaptation and quantization to efficiently deploy neural networks on devices with limited computing resources. QLoRA is useful in scenarios where neural networks need to be deployed on resource-constrained devices, such as smartphones and IoT devices, where lower precision can lead to energy-efficient and faster inference." },

        { term: "Random Forest", definition: "Random Forest is a versatile and powerful ensemble learning method used in machine learning for both classification and regression tasks. It is based on the principle of combining the predictions of multiple individual decision trees to make more accurate and robust predictions. The term 'Random Forest' was coined by Leo Breiman, and the algorithm has gained popularity for its simplicity, flexibility, and ability to handle high-dimensional data and complex relationships." },
      
        { term: "Recall", definition: "Recall, often referred to as sensitivity or the true positive rate, holds a prime position in the evaluation metrics used for classification models. Primarily, it answers a critical question: 'Of all the actual positive instances, how many were correctly predicted by the model?' Recall is calculated as the ratio of true positive predictions to the total actual positives, providing insights into the model’s ability to identify all relevant instances of a class. It is a crucial metric in situations where missing positive instances (false negatives) have significant consequences." },
      
        { term: "Reinforcement Learning", definition: "Reinforcement Learning (RL) is a subfield of machine learning that focuses on developing algorithms and models capable of learning optimal behaviors through trial and error interactions with an environment. Inspired by how humans and animals learn from the consequences of their actions, reinforcement learning enables machines to learn by receiving feedback in the form of rewards or penalties. RL is commonly used in scenarios where an agent must make sequential decisions to maximize a cumulative reward, such as game playing, robotics, and autonomous systems." },
      
        { term: "Retrieval Augmented Generation (RAG)", definition: "Retrieval-Augmented Generation (RAG) is a technique used in natural language processing (NLP) and machine learning to improve the performance of language models by augmenting their training data with retrieved information from external sources. The goal of RAG is to enable language models to generate more accurate, informative, and diverse responses by incorporating knowledge from various sources during the generation process. RAG is particularly valuable in tasks such as question answering and text generation where access to external knowledge can enhance the quality of generated content." },
      
        { term: "Scale Machine Learning", definition: "Scale machine learning refers to the ability to apply machine learning techniques and algorithms to large volumes of data, complex models, and high-performance computing systems. It involves the process of handling and processing massive amounts of data efficiently, training and deploying complex models, and managing the computational resources required to perform these tasks at scale. Scale machine learning is essential for addressing challenges related to big data and ensuring that machine learning solutions can effectively handle real-world scenarios with large and diverse datasets." },
      
        { term: "Supervised-learning", definition: "Supervised learning is a popular and widely used machine learning approach that involves training a model to make predictions or classify data based on labeled examples. In supervised learning, the algorithm learns from a given set of input-output pairs, where the inputs are the features or attributes of the data, and the outputs are the corresponding labels or target values. The goal is to learn a mapping function that can accurately predict the output for new, unseen inputs. Supervised learning is commonly used in tasks such as image classification, speech recognition, and natural language processing." },
      
        { term: "Support Vector Machines (SVM)", definition: "A Support Vector Machine (SVM), also referred to as a support vector machine algorithm or a vector support machine, is a powerful supervised machine learning algorithm used for both classification and regression tasks. It is particularly effective in solving complex classification problems where the data is not linearly separable. SVM works by finding the hyperplane that best separates the data into different classes, maximizing the margin between classes. The use of kernel functions allows SVM to handle non-linear decision boundaries and capture complex relationships in the data." },
      
        { term: "Training Data sets in Machine Learning", definition: "A training data set, also known as a train set, is a fundamental component of machine learning. It is a collection of labeled examples that is used to train a machine learning model. The training data set consists of input data, which represents the features or attributes of the data, and corresponding output labels or target values. During the training process, the model learns patterns and relationships from the training data to make predictions or classifications on new, unseen data." },
      
        { term: "Triplet Loss", definition: "Triplet loss is a loss function commonly used in machine learning for tasks like face recognition, image retrieval, and similarity learning. Its primary purpose is to train a model to learn embeddings (vector representations) of data points such that similar data points are closer together in the embedding space, while dissimilar ones are farther apart. Triplet loss is used in scenarios where the goal is to create a compact and discriminative embedding space, making it easier to measure similarity or dissimilarity between data points." },
      
        { term: "Unstructured Data", definition: "Unstructured data refers to information that either does not have a pre-defined data model or is not organized in a pre-defined manner. Unstructured data is typically non-textual, like images, audio, video, and multi-modal data, but can also be textual data, for example in the case of LLM applications. This results in a lack of a predefined data structure, making it challenging to analyze using traditional database and data management tools. Unstructured data requires specialized techniques, such as natural language processing and computer vision, to extract meaningful information and insights." },
      
        { term: "Unsupervised-learning", definition: "Unsupervised learning is a machine learning approach in which a model learns patterns and relationships in data without explicit supervision or labeled examples. Unlike supervised learning, where the model learns from labeled data to make predictions or classify new instances, unsupervised learning focuses on extracting meaningful information and structures from unlabeled data. Common techniques in unsupervised learning include clustering, dimensionality reduction, and generative modeling. Unsupervised learning is particularly useful in scenarios where obtaining labeled data is challenging or expensive." },
      
        { term: "Validation Set", definition: "In machine learning, a validation set refers to a subset of data that is used to assess the performance of a trained model. It is distinct from the training set, which is used to train the model, and the test set, which is used to evaluate the final performance of the model. The validation set serves as an additional check to ensure that the model generalizes well to new, unseen data. It is commonly used during the model development process to tune hyperparameters, assess overfitting, and make informed decisions about the final model architecture." },
      
        { term: "XGBoost", definition: "XGBoost (Extreme Gradient Boosting) is a powerful machine learning algorithm known for its efficiency and accuracy in handling structured data. It is an optimized implementation of the gradient boosting algorithm, which is an ensemble learning technique that combines multiple weak predictive models to create a stronger model. XGBoost has gained significant popularity in various machine learning competitions and real-world applications due to its speed, scalability, and ability to handle diverse data types. It is widely used for both classification and regression tasks, and its versatility makes it a preferred choice in the machine learning community." },
      
        { term: "Yolo-object-detection", definition: "YOLO, short for 'You Only Look Once,' is an object detection algorithm that aims to detect and classify objects within an image or video in real-time. Unlike traditional object detection methods that rely on region proposal algorithms followed by classification, YOLO takes a different approach by performing both tasks simultaneously. YOLO divides the input image into a grid and assigns bounding boxes and class predictions to each grid cell. This enables YOLO to achieve real-time object detection with a single pass through the neural network, making it efficient for applications such as autonomous vehicles, surveillance, and augmented reality." },
      
        { term: "Zero-Shot Learning", definition: "Zero-shot learning is an exciting and emerging field within machine learning that enables models to generalize and make predictions on unseen classes or tasks. Traditional machine learning approaches require a large amount of labeled data for training and are limited to making predictions only on classes or tasks seen during training. However, zero-shot learning pushes the boundaries by allowing models to make predictions on classes or tasks that were not part of the training data. This is achieved by leveraging additional information or semantic relationships between classes, enabling the model to transfer knowledge and generalize effectively in novel scenarios." },      
      

    // Add more terms as needed
  ];

  const [currentLetter, setCurrentLetter] = useState(null);

  const filterTerms = (letter) => {
    setCurrentLetter(letter);
  };

  const availableLetters = [...new Set(allTerms.map(({ term }) => term[0].toUpperCase()))].sort();

  return (
    <>
    <Head>
    <title>Cluster Protocol- Glossary </title>
    <meta name='description' content="Read important Web3 & AI related Terms on Cluster Protocol"></meta>
    <link type='image' rel='icon' href="assets/BRAND MARK/PNG/02_WHITE.png"></link>
    </Head>
    <div style={{ color: 'white', width: '95%', margin: 'auto', marginTop: '15vh' }}>
      <h2 style={{ fontSize: '2.5rem', margin: '0px', fontFamily: 'sephora', marginTop: '1rem', fontWeight: '100', color: '#ffffff', textShadow: '0 0 6rem white' }}>Glossary</h2>
      {/* <img className="blogThumbnail" src='assets/nebula.jpg' alt="Blog Thumbnail" /> */}

      <div>
        <p>Filter by letter: </p>
        <button className='glossaryTermLetterButton' onClick={() => setCurrentLetter(null)}>
          *
        </button>
        {availableLetters.map((letter, index) => (
          <button className='glossaryTermLetterButton' key={index} onClick={() => filterTerms(letter)}>
            {letter}
          </button>
        ))}

      </div>

      {currentLetter ? (
        <div>
          <h3 className='glossaryTermLetter'>{currentLetter}</h3>
          <dl>
            {allTerms
              .filter(({ term }) => term.toUpperCase().startsWith(currentLetter))
              .map(({ term, definition }, index) => (
                <div key={index}>
                      <dt className='glossaryTerm'>{term}</dt>
                      <dd className='glossarydef'>{definition}</dd>
                </div>
              ))}
          </dl>
        </div>
      ) : (
        <div>
          {availableLetters.map((letter) => (
            <div key={letter}>
              <h3 className='glossaryTermLetter'>{letter}</h3>
              <dl>
                {allTerms
                  .filter(({ term }) => term.toUpperCase().startsWith(letter))
                  .map(({ term, definition }, index) => (
                    <div key={index}>
                      <dt className='glossaryTerm'>{term}</dt>
                      <dd className='glossarydef'>{definition}</dd>
                    </div>
                  ))}
              </dl>
            </div>
          ))}
        </div>
      )}
    </div>
    </>

  );
};

export default Glossary;
