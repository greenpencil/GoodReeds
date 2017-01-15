<?php

namespace ReviewBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Comments
 *
 * @ORM\Table(name="comments")
 * @ORM\Entity(repositoryClass="ReviewBundle\Repository\CommentsRepository")
 */
class Comment
{
    /**
     * @var int
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @var string
     *
     * @ORM\Column(name="texr", type="text")
     */
    private $texr;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="created_at", type="datetime")
     */
    private $createdAt;

    /**
     * @var \DateTime
     *
     * @ORM\Column(name="updated_at", type="datetime")
     */
    private $updatedAt;

    /**
     * users make many comments
     * @ORM\ManyToOne(targetEntity="User", inversedBy="comments")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

    /**
     * comments belong to a review
     * @ORM\ManyToOne(targetEntity="Review", inversedBy="comments")
     * @ORM\JoinColumn(name="review_id", referencedColumnName="id")
     */
    private $review;

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set texr
     *
     * @param string $texr
     * @return Comments
     */
    public function setTexr($texr)
    {
        $this->texr = $texr;

        return $this;
    }

    /**
     * Get texr
     *
     * @return string 
     */
    public function getTexr()
    {
        return $this->texr;
    }

    /**
     * Set createdAt
     *
     * @param \DateTime $createdAt
     * @return Comments
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    /**
     * Get createdAt
     *
     * @return \DateTime 
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set updatedAt
     *
     * @param \DateTime $updatedAt
     * @return Comments
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    /**
     * Get updatedAt
     *
     * @return \DateTime 
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Set user
     *
     * @param \ReviewBundle\Entity\User $user
     * @return Comment
     */
    public function setUser(\ReviewBundle\Entity\User $user = null)
    {
        $this->user = $user;

        return $this;
    }

    /**
     * Get user
     *
     * @return \ReviewBundle\Entity\User 
     */
    public function getUser()
    {
        return $this->user;
    }

    /**
     * Set review
     *
     * @param \ReviewBundle\Entity\Review $review
     * @return Comment
     */
    public function setReview(\ReviewBundle\Entity\Review $review = null)
    {
        $this->review = $review;

        return $this;
    }

    /**
     * Get review
     *
     * @return \ReviewBundle\Entity\Review 
     */
    public function getReview()
    {
        return $this->review;
    }
}
